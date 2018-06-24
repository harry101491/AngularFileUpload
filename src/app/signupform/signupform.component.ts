import {
  Component,
  OnInit
} from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {
  user: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.user = this._formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      account: this._formBuilder.group({
        email: ["", Validators.email],
        confirm: ["", Validators.required]
      })
    });
  }

  onSubmit({ value, valid }: { value: any, valid: boolean }) {
    console.log("Inside the on submit function");
    console.log(value);
    console.log(valid);
  }

}
