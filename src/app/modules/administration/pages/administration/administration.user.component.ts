import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AdministrationUserBaseComponent} from './administration.user.component.base';

@Component({
  selector: 'two-administration',
  templateUrl: './administration.user.component.html',
  styleUrls: ['./administration.user.component.scss']


})
export class AdministrationUserComponent extends AdministrationUserBaseComponent {
  constructor(fb: FormBuilder) {
    super(fb);
  }
}


