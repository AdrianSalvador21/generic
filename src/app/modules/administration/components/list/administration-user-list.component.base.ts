import {Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AppConfig} from '../../../../config/app.config';
import {Store} from '@ngrx/store';
import * as administrationActions from '../../actions/administration.action';
import {AppState} from '../../../../app.reducer';
import {BaseComponent} from '../../../../core/components/base/base.component';


export class ListUserAdministrationBaseComponent extends  BaseComponent implements OnInit {
  displayColumns: string[] = ['name', 'email', 'tel', 'button'];
  @Input() data: any;

  constructor(protected fb: FormBuilder,
              protected router: Router,
              store: Store<AppState>) {
    super(store);
  }

  userDetails(element) {
    this.store.dispatch(new administrationActions.LoadUser(element));
    this.router.navigate([AppConfig.routes.administration.users.details.url]);
  }

  ngOnInit() {
  }

}

