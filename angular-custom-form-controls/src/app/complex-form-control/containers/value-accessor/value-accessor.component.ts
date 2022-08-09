import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-value-accessor',
  templateUrl: './value-accessor.component.html',
  styleUrls: ['./value-accessor.component.scss'],
})
export class ValueAccessorComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      itemName: new FormControl(),
      isLocked: new FormControl(false),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
