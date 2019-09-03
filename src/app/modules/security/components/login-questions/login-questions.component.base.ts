import {OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {Router} from '@angular/router';
import {UserService} from '../../../../core/services/user.service';

export class LoginQuestionsComponentBase extends BaseComponent implements OnInit {

  loginForm = this.fb.group({
    firstQuestion: ['', Validators.required],
    secondQuestion: ['', Validators.required],
    thirdQuestion: ['', Validators.required],
    firstValue: ['', Validators.required],
    secondValue: ['', Validators.required],
    thirdValue: ['', Validators.required],
  });

  questionsBase: any;
  fistQuestionData: any;
  secondQuestionData: any;
  thirdQuestionData: any;

  loadingSelect: boolean;

  get formControls() {
    return this.loginForm.controls;
  }

  constructor(protected fb: FormBuilder,
              protected store: Store<AppState>,
              protected router: Router,
              protected userService: UserService) {
    super(store);
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = true;
    }, 10);
    this.userService.getSecretQuestions().subscribe(questionsResponse => {
      if (questionsResponse['errorCode'] === '0') {
        this.questionsBase = questionsResponse['data'];
      }
      this.loading = false;
    });

    this.formControls.firstValue.disable();
    this.formControls.secondValue.disable();
    this.formControls.thirdValue.disable();
    this.loginForm.controls.firstQuestion.valueChanges.subscribe(() => {
      this.validateInput(this.loginForm.controls.firstQuestion, this.loginForm.controls.firstValue);
    });
    this.loginForm.controls.secondQuestion.valueChanges.subscribe(() => {
      this.validateInput(this.loginForm.controls.secondQuestion, this.loginForm.controls.secondValue);
    });
    this.loginForm.controls.thirdQuestion.valueChanges.subscribe(() => {
      this.validateInput(this.loginForm.controls.thirdQuestion, this.loginForm.controls.thirdValue);
    });
  }

  loadSelect(select: string) {
    this.loadingSelect = true;
    switch (select) {
      case 'firstQuestion':
        this.fistQuestionData = [...this.questionsBase];
        break;
      case 'secondQuestion':
        this.secondQuestionData = [...this.questionsBase];
        break;
      case 'thirdQuestion':
        this.thirdQuestionData = [...this.questionsBase];
        break;
      default:
        break;
    }
    Object.keys(this.formControls).forEach((key) => {
      for (let i = 0; i < this.questionsBase.length; i++) {
        if ((this.formControls[key].value === this.questionsBase[i]['questionKey']) && (key !== select)) {
          let indexValue;
          switch (select) {
            case 'firstQuestion':
              indexValue = this.fistQuestionData.indexOf(this.questionsBase[i]);
              this.fistQuestionData.splice(indexValue, 1);
              break;
            case 'secondQuestion':
              indexValue = this.secondQuestionData.indexOf(this.questionsBase[i]);
              this.secondQuestionData.splice(indexValue, 1);
              break;
            case 'thirdQuestion':
              indexValue = this.thirdQuestionData.indexOf(this.questionsBase[i]);
              this.thirdQuestionData.splice(indexValue, 1);
              break;
            default:
              break;
          }
        }
      }
    });
    setTimeout(() => {
      this.loadingSelect = false;
    }, 500);
  }

  validateInput(question: any, value: any) {
    value.setValue('');
    if (!!question.value) {
      value.enable();
    } else {
      value.disable();
    }
  }

  loginSubmit() {
  }
}
