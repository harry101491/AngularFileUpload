import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './components/upload/upload.component';
import { 
  MatButtonModule, 
  MatDialogModule, 
  MatListModule, 
  MatProgressBarModule 
} from '@angular/material'

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { DialogComponent } from './components/dialog/dialog.component';

// Importing services
import { UploadService } from "./services/upload.service";


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule, 
    MatDialogModule, 
    MatListModule, 
    MatProgressBarModule 
  ],
  declarations: [
    UploadComponent,
    DialogComponent
  ],
  exports: [
    UploadComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [
    UploadService
  ]
})
export class UploadModule { }
