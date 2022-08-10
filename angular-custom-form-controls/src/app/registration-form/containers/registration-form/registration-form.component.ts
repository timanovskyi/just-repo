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
      name: new FormControl('Test', {
        validators: [Validators.required],
      }),
      email: new FormControl('email@gmail.com', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('test', {
        validators: [Validators.required],
      }),
      favouriteHexCode: new FormControl('000'),
    });
  }
}
