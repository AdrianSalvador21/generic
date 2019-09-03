import {Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {UserService} from '../../../../core/services/user.service';


export class RolesDetailUserAdministrationBaseComponent extends BaseComponent  implements OnInit {
  @Input() data: any;
  @Input()
  set rolesInput(data: any) {
    this.loadingData = true;
    this.loading = true;
    this.rolesSelected = data;
    if (!!this.rolesSelected) {
      this.arrayRoles(this.rolesSelected);
    }
  }
  rolesSelected: any;
  todo: any = [];
  loadingData = false;
  variableUpdateRoles = '';
  variableIdUser = '';

  done = [
    'AGENT',
    'ADMINISTRATOR',
    'OPERATOR',
    'SUPERVISOR'
  ];

  constructor(protected fb: FormBuilder,
              protected userService: UserService,
              protected  store: Store<AppState>) {
    super(store);
  }

  ngOnInit() {

  }

drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
  }
}

arrayRoles(rolesSelected) {
  rolesSelected.forEach(nameRole => {
    this.todo.push(nameRole['ROLEID4007']);
    this.arrayRolesStatics();
  });
  this.loading = false;
}
arrayRolesStatics() {
  for (let i = 0; i < this.done.length; i++) {
    for (let j = 0; j < this.todo.length; j++) {
      if (this.done[i] === this.todo[j]) {
        const position = this.done.indexOf(this.done[i]);
        this.done.splice(position, 1);
      }
    }
  }
  this.loadingData = false;
}
updateRoles() {
  this.variableUpdateRoles = '';
  this.variableIdUser = '';
  for (let i = 0; i < this.todo.length; i++) {
    if (i === this.todo.length - 1) {
      this.variableUpdateRoles += `${this.todo[i]}`;
    } else {
      this.variableUpdateRoles += `${this.todo[i]},`;
    }
  }
  this.sendRolesUpdate();
}
sendRolesUpdate() {
  this.loading = true;
  this.variableIdUser = this.data.user['USERID4009'];
  this.userService.rolesUpdate(this.variableUpdateRoles, this.variableIdUser).subscribe(response => {
    console.log(this.variableUpdateRoles);

    if (response.errorCode !== '0') {
      return;
    }
    if (response.data.length === 0) {
      return;
    }
    this.loading = false;

  });
}

}
