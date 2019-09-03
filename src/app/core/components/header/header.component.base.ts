import {EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {BaseComponent} from '../base/base.component';
import {NavItem} from '../../interfaces/interfaces';
import {AuthenticationService} from '../../services/authentication.service';
import {UserService} from '../../services/user.service';
import * as contextInfoActions from '../../store/actions/context-info.actions';

export class HeaderComponentBase extends BaseComponent implements OnInit {
  @Output() menuIconClicked = new EventEmitter();
  userImage = '/assets/images/user.png';
  userDetail: any;
  navItems: NavItem[] = [];

  constructor(store: Store<AppState>,
              protected authenticationService: AuthenticationService,
              protected  userService: UserService) {
    super(store);
  }

  ngOnInit() {
    this.store.select('contextInfo').subscribe(data => {
      if (!!this.userDetail) {
        // data loaded
        return;
      } else {
        this.getUserData(data.user);
      }
      if (!!data.menu) {
        const mainMenu = data.menu.filter(menuItem => menuItem.tipObj === 'USERMENU');
        this.navItems = this.getMenu(mainMenu);
      }
    });
  }

  onClickMenuIcon() {
    this.menuIconClicked.emit();
  }

  getMenu(data: NavItem[]): NavItem[] {
    const parents = data.filter(item => !item.parentNode);
    parents.forEach(parent => {
      parent.children = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].parentNode === parent.nodeId) {
          parent.children.push(data[i]);
        }
      }
    });
    return parents;
  }

  getUserData(userSession) {
    this.userService.getUserDetail(userSession.userID).subscribe(userDetail => {
      if (userDetail.errorCode !== 0) {
        this.userDetail = userDetail.data[0];
        this.store.dispatch(new contextInfoActions.LoadUserDetail(userDetail.data[0]));
      } else {
        return;
        // TODO set error
      }
    });
  }

  logout() {
    this.authenticationService.logout();
    // this.store.dispatch(new contextInfoActions.Reset());
  }
}
