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

  getSkills(i: number) {
    return this.employees.at(i).get('skills') as FormArray;
  }

  addEmployee() {
    const employee = this._fb.group({
      id: [this._generateId()],
      firstname: ['', Validators.required],
      name: ['', Validators.required],
      skills: this._fb.array([]),
    });
    this.employees.push(employee);
  }

  addSkill(i: number) {
    const skill = this._fb.group({
      id: [this._generateId()],
      title: ['', Validators.required],
    });
    this.getSkills(i).push(skill);
  }

  deleteSkill(employeeIndex: number, skillIndex: number) {
    this.getSkills(employeeIndex).removeAt(skillIndex);
  }

  private _generateId(): number {
    return Math.floor(Math.random() * 10000);
  }
}
