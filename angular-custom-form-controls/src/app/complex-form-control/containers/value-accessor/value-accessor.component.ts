import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-value-accessor',
  templateUrl: './value-accessor.component.html',
  styleUrls: ['./value-accessor.component.scss'],
})
export class ValueAccessorComponent implements OnInit {
  form: FormGroup = this._fb.group({
    itemName: new FormControl(),
  });

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value);
  }
}
