import {Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {BaseComponent} from '../base/base.component';
import {NavItem} from '../../interfaces/interfaces';


export class MenuComponentBase extends BaseComponent implements OnInit {
  @Input() appDrawer;

  navItems: NavItem[] = [];

  constructor(protected router: Router, store: Store<AppState>) {
    super(store);
    this.store.select('contextInfo').subscribe(data => {
      if (!!data.menu) {
        if (this.navItems.length === 0) {
          const mainMenu = data.menu.filter(menuItem => menuItem.tipObj === 'MENU');
          this.navItems = this.getMenu(mainMenu);
          const filteredMenu = data.menu.filter((item) => (item.objData !== ''));
          this.router.navigate([filteredMenu[0].objData]).then(() => {
            this.loading = false;
          }).catch(() => {
            this.loading = false;
          });
        } else {
          return;
        }
      }
    });
  }

  ngOnInit() {
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
}
