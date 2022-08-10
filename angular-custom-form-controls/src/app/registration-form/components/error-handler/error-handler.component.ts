import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss'],
})
export class ErrorHandlerComponent implements OnInit {
  @Input() formField?: FormControl;
  @Input() typeOfError: string = '';
  constructor() {}

  ngOnInit(): void {}

  getTextError(): string {
    switch (this.typeOfError) {
      case 'required': {
        return 'This field is required';
      }
      case 'email': {
        return 'This field is a email type';
      }
      default: {
        return 'Something is being wrong';
      }
    }
  }
}
