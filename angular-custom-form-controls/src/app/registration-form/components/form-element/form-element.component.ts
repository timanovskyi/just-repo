import { Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { INPUT_TYPE } from '../../models';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormElementComponent,
      multi: true,
    },
  ],
})
export class FormElementComponent implements ControlValueAccessor {
  @Input() fieldName: string = '';
  @Input() additionalType: string = '';
  @Input() parentForm?: FormGroup;

  value: string = '';
  isDisabled: boolean = false;
  touched: () => void = () => {};
  changed: (value: string) => void = () => {};

  constructor() {}

  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl;
  }

  get isEmailField(): boolean {
    return this.fieldName === INPUT_TYPE.EMAIL;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChange(event: Event) {
    const value: string = (<HTMLInputElement>event.target).value;
    this.changed(value);
    this.touched();
  }

  getTypeOfInput(): string {
    switch (this.fieldName) {
      case INPUT_TYPE.EMAIL: {
        return 'email';
      }
      case INPUT_TYPE.PASSWORD: {
        return this.additionalType || 'password';
      }
      case INPUT_TYPE.NAME:
      default: {
        return 'text';
      }
    }
  }
}
