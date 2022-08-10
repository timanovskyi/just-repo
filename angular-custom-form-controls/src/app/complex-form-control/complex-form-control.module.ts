import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockInputComponent } from './components/lock-input/lock-input.component';
import { ValueAccessorComponent } from './containers/value-accessor/value-accessor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [LockInputComponent, ValueAccessorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  exports: [ValueAccessorComponent],
})
export class ComplexFormControlModule {}
