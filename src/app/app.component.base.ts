import {AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {NavService} from './core/services/nav.service';
import {TranslateService} from '@ngx-translate/core';
import {AppConfig} from './config/app.config';
import {Store} from '@ngrx/store';
import {AppState} from './app.reducer';
import {ContextInfoState} from './core/store/reducers/context-info.reducer';
import * as contextInfoActions from './core/store/actions/context-info.actions';

declare const require;

export class AppComponentBase implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('appDrawer') protected appDrawer: ElementRef;
  protected mobileQuery: MediaQueryList;

  protected contextInfoState: ContextInfoState;

  protected readonly _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              protected navService: NavService,
              protected translateService: TranslateService,
              protected store: Store<AppState>) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.translateService.setDefaultLang(AppConfig.defaultLanguage);
    this.translateService.use(AppConfig.defaultLanguage);

    // With this we load the default language in the main bundle (cache busting)
    this.translateService.setTranslation(AppConfig.defaultLanguage, require('../assets/i18n/' + AppConfig.defaultLanguage + '.json'));

    this.store.select(AppConfig.reducers.contextInfo).subscribe(contextInfoState => {
      this.contextInfoState = contextInfoState;
      const error = contextInfoState.error;
      if (!!error) {
        this.store.dispatch(new contextInfoActions.CleanGenericError());
        alert(error);
      }
    });
  }

  get loading(): boolean {
    return !!this.contextInfoState && this.contextInfoState.loading;
  }

  get isAuthenticated(): boolean {
    return !!this.contextInfoState && !!this.contextInfoState.user && !!this.contextInfoState.menu;
  }
}
