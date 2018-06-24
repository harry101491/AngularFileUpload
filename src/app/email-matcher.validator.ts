import {
  AbstractControl
} from "@angular/forms";

export const emailMatcher = (control: AbstractControl): {[key: string]: boolean} => {
  const email = control.get("email");
  const confirm = control.get("confirm");
  // will be a form control
  console.log(email);
  console.log(confirm);

  if(!email || !confirm) {
    return null;
  }
  if(email.value == confirm.value) {
    return null;
  }
  return null;
};
