import {OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppConfig} from '../../../../config/app.config';
import {MatDialog} from '@angular/material';
import {ConfirmPasswordDialogComponent} from '../../../../shared/components/confirm-password-dialog/confirm-password-dialog.component';

export class ProfileComponentBase implements OnInit {
  activeRoute = AppConfig.routes.security.profile.edit.url;
  openRoutes = [AppConfig.routes.security.profile.edit.url];
  navItems = [
    {
      displayName: 'editProfile',
      route: AppConfig.routes.security.profile.edit.url,
    },
    {
      displayName: 'changePassword',
      route: AppConfig.routes.security.profile.password.url,
    },
    {
      displayName: 'secretQuestion',
      route: AppConfig.routes.security.profile.secretQuestion.url,
    }
  ];

  constructor(protected router: Router, protected dialog: MatDialog) {
    if (router.url !== `/${AppConfig.routes.security.profile.edit.url}`) {
      router.navigate([AppConfig.routes.security.profile.edit.url]);
    }
  }

  ngOnInit() {
  }

  changeOption(route: string) {
    if (this.openRoutes.includes(route)) {
      this.activeRoute = route;
      this.router.navigate([route]);
      return;
    }
    const dialogRef = this.dialog.open(ConfirmPasswordDialogComponent, {
      width: '400px',
      height: '200px',
      data: {message: 'beneficiary.operator.filter.error.noRecords'}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.validatePassword(result, route);
    });
  }

  validatePassword(userPassword: string, route: string) {
    if (!!userPassword) {
      // Validate password
      this.activeRoute = route;
      this.router.navigate([route]);
    } else {
      return;
    }
  }

}
