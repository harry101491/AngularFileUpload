import { 
  Component, 
  OnInit, 
  OnDestroy,
  Input
} from "@angular/core";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject"; 


export enum TOAST_TYPE {
  ERROR_TOAST = "ERROR_TOAST",
  SUCCESS_TOAST = "SUCCESS_TOAST",
  NO_TOAST = "NO_TOAST"
};

@Component({
  selector: "app-toast",
  styleUrls: [ "./toast.component.css" ],
  templateUrl: "./toast.component.html"
})
export class ToastComponent implements OnInit, OnDestroy {
  
  type: BehaviorSubject<TOAST_TYPE> = new BehaviorSubject<TOAST_TYPE>(TOAST_TYPE.NO_TOAST);

  message: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(
  ) {}

  // life cycle hook that will run when the component will be loaded on the DOM.
  ngOnInit() {
  }

  showToast(toastType: TOAST_TYPE, message) {}
      
  onCloseClick() {
    console.log("Inside the close of the error block");
  }

  // life cycle hook that will run before the component will be destroyed.
  ngOnDestroy() {

  }
}
