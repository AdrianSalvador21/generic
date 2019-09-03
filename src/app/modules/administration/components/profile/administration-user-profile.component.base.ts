import {Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
export class ProfileUserAdministrationBaseComponent  implements OnInit {
  userImage = '/assets/images/user.png';
  @Input() data: any;

  constructor(protected fb: FormBuilder, protected router: Router
              ) {
  }
  ngOnInit() {
  }




}
