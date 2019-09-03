import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HighUserAdministrationBaseComponent} from './high.user.administration.component.base';

@Component({
  selector: 'two-high-user-administration',
  templateUrl: './high.user.administration.component.html',
  styleUrls: ['./high.user.administration.component.scss']
})
export class HighUserAdministrationComponent extends HighUserAdministrationBaseComponent {

  constructor(protected fb: FormBuilder) {
    super(fb);
  }
}
