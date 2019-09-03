import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../classes/field.interface";
@Component({
  selector: "two-select",
  template: `
<mat-form-field class="demo-full-width margin-top" [formGroup]="group">
<mat-select [placeholder]="field.label" [formControlName]="field.name">
<mat-option *ngFor="let item of field.options" [value]="item.value">{{item.placeholder}}</mat-option>
</mat-select>
</mat-form-field>
`,
  styles: []
})
export class SelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
