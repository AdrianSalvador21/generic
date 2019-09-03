import { OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {AppConfig} from '../../../../config/app.config';
import * as contextInfoActions from '../../../../core/store/actions/context-info.actions';

export class EditProfileComponentBase implements OnInit {
  userImage = '/assets/images/user.png';
  userDetail: any;
  fieldsDetail = ['cellPhone', 'gender', 'email', 'nationality'];

  constructor(protected store: Store<AppState>) {
    this.store.select(AppConfig.reducers.contextInfo).subscribe(contextInfoState => {
      this.userDetail = contextInfoState.userDetail;
      console.log(this.userDetail);
    });
  }

  ngOnInit() {
  }

}
