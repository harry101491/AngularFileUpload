import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialogRef } from "@angular/material";  

import { UploadService } from "../../services/upload.service";
import { forkJoin } from "rxjs/observable/forkJoin";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent implements OnInit {
  @ViewChild("file") file;
  public files: Set<File> = new Set();

  // component state variables
  progress;
  canBeClosed = true;
  primaryButtonText = "Upload";
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;

  constructor(
    private _uploadService: UploadService,
    private _dialogRef: MatDialogRef<DialogComponent> 
  ) {}

  ngOnInit() {}

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }

  closeDialog() {
    // if everything was uploaded already, just close the dialog
    if (this.uploadSuccessful) {
      return this._dialogRef.close();
    }

    // set the component state to "uploading"
    this.uploading = true;

    // start the upload and save the progress map
    this.progress = this._uploadService.uploadFile(this.files);

    // convert the progress map into an array
    let allProgressObservables = [];
    for (let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }

    // Adjust the state variables

    // The OK-button should have the text "Finish" now
    this.primaryButtonText = "Finish";

    // The dialog should not be closed while uploading
    this.canBeClosed = false;
    this._dialogRef.disableClose = true;

    // Hide the cancel-button
    this.showCancelButton = false;

    // When all progress-observables are completed...
    forkJoin(allProgressObservables).subscribe(end => {
      // ... the dialog can be closed again...
      this.canBeClosed = true;
      this._dialogRef.disableClose = false;

      // ... the upload was successful...
      this.uploadSuccessful = true;

      // ... and the component is no longer uploading
      this.uploading = false;
    });
  }
}
