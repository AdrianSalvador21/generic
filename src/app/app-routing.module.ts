import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppConfig} from './config/app.config';
import {Error404Page} from './core/pages/error404/error404.page';
import {AuthGuard} from './core/guards/guards.auth';
import {SecurityModule} from './modules/security/security.module';
import {AdministrationModule} from './modules/administration/administration.module';
import {DemoModule} from './modules/demo/demo.module';
import {DynamicFormGeneratorModule} from './modules/dynamic-form-generator/dynamic-form-generator.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/' + AppConfig.routes.security.login.user.url,
    pathMatch: 'full'
  },
  {
    path: AppConfig.routes.error404.key,
    component: Error404Page
  },
  {
    path: AppConfig.routes.security.key,
    loadChildren: () => SecurityModule
  },
  {
    path: AppConfig.routes.administration.key,
    loadChildren: () => AdministrationModule,
    canActivate: [AuthGuard]
  },
  {
    path: AppConfig.routes.demo.key,
    loadChildren: () => DemoModule,
    canActivate: [AuthGuard]
  },
  {
    path: AppConfig.routes.dynamicFormGenerator.key,
    loadChildren: () => DynamicFormGeneratorModule,
    canActivate: [AuthGuard]
  },
  {
    path: AppConfig.routes.demo.key,
    loadChildren: () => DemoModule,
    canActivate: [AuthGuard]
  },
  // otherwise redirect to 404
  {
    path: '**',
    redirectTo: '/' + AppConfig.routes.error404.url
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'disabled',
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
