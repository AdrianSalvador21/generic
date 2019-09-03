import {HostBinding, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavService} from '../../services/nav.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {BaseComponent} from '../base/base.component';
import {NavItem} from '../../interfaces/interfaces';

export class MenuListItemComponentBase extends BaseComponent implements OnInit {
  expanded: boolean;
  selected: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() appDrawer;
  @Input() depth: number;
  @Input() isChild;

  constructor(protected navService: NavService,
              protected router: Router,
              store: Store<AppState>) {
    super(store);
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      this.selected = this.router.url.includes(this.item.objData) && this.item.objData !== '';
      if (this.item.objData && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.objData}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.objData]);
      this.appDrawer.close();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
