import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {InputUserAdministrationBaseComponent} from './administration-user-input.component.base';


@Component({
  selector: 'two-administration-user-input',
  templateUrl: './administration-user-input.component.html',
  styleUrls: ['./administration-user-input.component.scss']

})
export class InputUserAdministrationComponent extends InputUserAdministrationBaseComponent {
  constructor(protected fb: FormBuilder) {
    super(fb);
  }
}
