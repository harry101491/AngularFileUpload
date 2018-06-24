import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PcomponentComponent } from './pcomponent/pcomponent.component';

import { BasicHighlightDirective } from "./basic-highlight/basic-highlight.directive";
import { UnlessDirective } from './unless/unless.directive';
import { SignupformComponent } from './signupform/signupform.component';
// import {
//   MatInputModule,
//   MatPaginatorModule,
//   MatProgressSpinnerModule,
//   MatSortModule,
//   MatTableModule,
//   MatAutocompleteModule
// } from "@angular/material";

// import { ReactiveFormsModule } from "@angular/forms";

// import { HttpClientModule } from "@angular/common/http";
// import { UserService } from './user.service';

// import { UploadModule } from "./upload/upload.module";
// import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    PcomponentComponent,
    BasicHighlightDirective,
    UnlessDirective,
    SignupformComponent
    // ToastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    // HttpClientModule,
    // MatInputModule,
    // MatPaginatorModule,
    // MatProgressSpinnerModule,
    // MatSortModule,
    // MatTableModule,
    // MatAutocompleteModule,
    // UploadModule
  ],
  providers: [
    // UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
