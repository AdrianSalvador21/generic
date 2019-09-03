import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MenuComponentBase} from './menu.component.base';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';

@Component({
  selector: 'two-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent extends MenuComponentBase {
  constructor(router: Router, store: Store<AppState>) {
    super(router, store);
  }
}
