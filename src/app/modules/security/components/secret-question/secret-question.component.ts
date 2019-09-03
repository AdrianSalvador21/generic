import { Component, OnInit } from '@angular/core';
import {SecretQuestionComponentBase} from './secret-question.component.base';

@Component({
  selector: 'two-secret-question',
  templateUrl: './secret-question.component.html',
  styleUrls: ['./secret-question.component.scss']
})
export class SecretQuestionComponent extends SecretQuestionComponentBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
