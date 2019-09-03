import {ChangeDetectorRef, Component} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {NavService} from './core/services/nav.service';
import {TranslateService} from '@ngx-translate/core';
import {AppComponentBase} from './app.component.base';
import {Store} from '@ngrx/store';
import {AppState} from './app.reducer';

@Component({
  selector: 'two-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})

export class AppComponent extends AppComponentBase {

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              navService: NavService,
              translateService: TranslateService,
              store: Store<AppState>) {
    super(changeDetectorRef, media, navService, translateService, store);
  }
}
