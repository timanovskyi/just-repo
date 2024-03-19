import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeEditorComponent } from '../employee-editor/employee-editor.component';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [RouterOutlet, EmployeeEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
