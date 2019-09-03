import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {ProfileUserAdministrationBaseComponent} from './administration-user-profile.component.base';

@Component({
  selector: 'two-administration-user-profile',
  templateUrl: './administration-user-profile.component.html',
  styleUrls: ['./administration-user-profile.component.scss']

})
export class ProfileUserAdministrationComponent extends ProfileUserAdministrationBaseComponent {

  constructor(fb: FormBuilder, router: Router) {
    super(fb, router);
  }

}
