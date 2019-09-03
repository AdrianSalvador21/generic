import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'two-unique-date',
  templateUrl: './unique-date.component.html',
  styleUrls: ['./unique-date.component.scss']
})
export class UniqueDateComponent implements OnInit {

  minDate = this.fb.group({
    dateMinCheck: [''],
    dateType: [''],
    dateValue: ['']
  });

  maxDate = this.fb.group({
    dateMinCheck: [''],
    dateType: [''],
    dateValue: ['']
  });

  valueDate = this.fb.group({
    dateMinCheck: [''],
    dateType: [''],
    dateValue: ['']
  });

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

}
