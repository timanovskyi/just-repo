import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup = new FormGroup({});
  passwordFieldType: string = 'password';

  constructor(private _fb: FormBuilder) {}

  get nameField(): FormControl {
    return this.registrationForm.get('name') as FormControl;
  }

  get emailField(): FormControl {
    return this.registrationForm.get('email') as FormControl;
  }

  get passwordField(): FormControl {
    return this.registrationForm.get('password') as FormControl;
  }

  get favouriteHexCodeValue(): string {
    return '#' + this.registrationForm.get('favouriteHexCode')?.value;
  }

  ngOnInit(): void {
    this._initRegistrationForm();
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }

    const request = {
      ...this.registrationForm.value,
    };
    console.log({ request });
  }

  togglePasswordVisible() {
    this.passwordFieldType =
      this.passwordFieldType === 'text' ? 'password' : 'text';
  }

  private _initRegistrationForm() {
    this.registrationForm = this._fb.group({
      name: new FormControl('', {
        validators: [Validators.required],
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        validators: [Validators.required],
      }),
      favouriteHexCode: new FormControl(''),
    });
  }
}
