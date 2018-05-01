import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadService } from '../../services/upload.service';
import { DialogComponent } from "../dialog/dialog.component"

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(
    private _dialog: MatDialog,
    private _uploadService: UploadService
  ) { }

  public openUploadDialog() {
    let dialogRef = this._dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }

  ngOnInit() {
  }

}
