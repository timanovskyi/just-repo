import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-editor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee-editor.component.html',
  styleUrl: './employee-editor.component.scss',
})
export class EmployeeEditorComponent {
  private _fb = inject(FormBuilder);

  employeeForm = this._fb.group({
    employees: this._fb.array([]),
  });

  constructor() {}

  get employees() {
    return this.employeeForm.get('employees') as FormArray;
  }

  addEmployee() {
    const employee = this._fb.group({
      firstname: ['', Validators.required],
      name: ['', Validators.required],
      skills: this._fb.array([]),
    });
    this.employees.push(employee);
  }
}
