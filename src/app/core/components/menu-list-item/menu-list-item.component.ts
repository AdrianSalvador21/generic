import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MenuListItemComponentBase} from './menu-list-item.component.base';
import {NavService} from '../../services/nav.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';

@Component({
  selector: 'two-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})

export class MenuListItemComponent extends MenuListItemComponentBase {
  constructor(navService: NavService, router: Router, store: Store<AppState>) {
    super(navService, router, store);
  }
}
