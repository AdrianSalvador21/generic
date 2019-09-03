import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {LoggerService} from './services/logger.service';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {Error404Page} from './pages/error404/error404.page';
import {MenuComponent} from './components/menu/menu.component';
import {MenuListItemComponent} from './components/menu-list-item/menu-list-item.component';
import {NavService} from './services/nav.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TimingInterceptor} from './interceptors/timing.interceptor';
import {JwtInterceptor} from './interceptors/jwt.interceptor';
import {ErrorInterceptor} from './interceptors/error.interceptor';
import {AutofocusModule} from 'angular-autofocus-fix';

export const CORE_MODULE_BASE = {
  imports: [
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    AutofocusModule
  ],
  declarations: [
    Error404Page,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuListItemComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuListItemComponent,
    HttpClientModule
  ],
  providers: [
    LoggerService,
    NavService,
    {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  entryComponents: []
};
