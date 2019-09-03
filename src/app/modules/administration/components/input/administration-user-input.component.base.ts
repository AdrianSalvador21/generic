import {OnInit, Output, EventEmitter, Input, ViewChild} from '@angular/core';
import {FormBuilder, FormGroupDirective, Validators} from '@angular/forms';


export class InputUserAdministrationBaseComponent  implements OnInit {
  @ViewChild('formInput')inputForm: FormGroupDirective;
  @Output() sendTheName:  EventEmitter<string>;
  highForm = this.fb.group({
    name: ['', Validators.required]
  });
  constructor(protected fb: FormBuilder) {
    this.sendTheName = new EventEmitter();
  }

  ngOnInit() {
  }
  sendName(name: string) {
    this.sendTheName.emit(name);
    // this.inputForm.resetForm();
  }
}
