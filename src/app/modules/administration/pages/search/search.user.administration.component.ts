import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SearchService} from '../../../../core/services/search.service';
import {SearchUserAdministrationBaseComponent} from './search.user.administration.component.base';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';

@Component({
  selector: 'two-search-user-administration',
  templateUrl: './search.user.administration.component.html',
  styleUrls: ['./search.user.administration.component.scss']

})
export class SearchUserAdministrationComponent extends SearchUserAdministrationBaseComponent {

  constructor(protected fb: FormBuilder,
              protected search: SearchService,
              store: Store<AppState>) {
    super(fb, search, store);
  }
}
