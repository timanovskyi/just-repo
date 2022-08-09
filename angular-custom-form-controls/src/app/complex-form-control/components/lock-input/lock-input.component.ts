import {Component} from '@angular/core';

@Component({
  selector: 'app-lock-input',
  templateUrl: './lock-input.component.html',
  styleUrls: ['./lock-input.component.scss']
})
export class LockInputComponent {


  isLocked = false;

  constructor() {
  }
}
