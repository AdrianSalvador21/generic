import {Component} from '@angular/core';
import {fadeInOut} from '../../helpers/utils.helper';
import {BaseComponent} from '../../../core/components/base/base.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';

@Component({
  selector: 'two-full-screen-spinner',
  templateUrl: './full-screen-spinner.component.html',
  styleUrls: ['./full-screen-spinner.component.scss'],
  animations: [fadeInOut]
})
export class FullScreenSpinnerComponent extends BaseComponent {

  constructor(store: Store<AppState>) {
    super(store);
  }
}
