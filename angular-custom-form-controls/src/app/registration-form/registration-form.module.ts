import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './containers/registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormElementComponent } from './components/form-element/form-element.component';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';

@NgModule({
  declarations: [RegistrationFormComponent, FormElementComponent, ErrorHandlerComponent],
  exports: [RegistrationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class RegistrationFormModule {}
