import { Component, OnInit } from '@angular/core';
import {ProfileComponentBase} from './profile.component.base';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'two-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends ProfileComponentBase implements OnInit {
  constructor(router: Router, dialog: MatDialog) {
    super(router, dialog);
  }

  ngOnInit() {
  }

}
