import {Component} from '@angular/core';
import {FooterComponentBase} from './footer.component.base';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';

@Component({
  selector: 'two-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent extends FooterComponentBase {
  constructor(store: Store<AppState>) {
    super(store);
  }
}
