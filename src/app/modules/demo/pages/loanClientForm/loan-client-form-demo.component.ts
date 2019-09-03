import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroupDirective, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';
import {UserService} from '../../../../core/services/user.service';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {MatDialog} from '@angular/material';
import {AllBrandsDialogComponent} from '../../../../shared/components/client-form-cars-dialog/all-brand-dialog.component';

@Component({
  selector: 'two-loan-client-form',
  templateUrl: './loan-client-form-demo.component.html',
  styleUrls: ['./loan-client-form-demo.component.scss']
})
export class LoanClientFormComponent extends BaseComponent implements OnInit {
  @ViewChild ( 'closeBrandsSelect' ) closeBrands: any;

  data = undefined;
  allBrands: any;
  allModels: any;
  allFeeNumbers: any;

  @ViewChild('form') directiveForm: FormGroupDirective;
  loanForm = this.fb.group({
    cost: ['', Validators.required],
    brand: ['', Validators.required],
    model: ['', Validators.required],
    feeNumber: ['', Validators.required],
    feeValue: ['', Validators.required],
    interests: ['', Validators.required],
    totalPay: ['', Validators.required]
  });

  get loanFormValues() {
    return this.loanForm.getRawValue();

  }

  constructor(protected fb: FormBuilder,
              public dialog: MatDialog ,
              protected userService: UserService,
              protected store: Store<AppState>) {
    super(store);
  }
  ngOnInit() {
    this.data = undefined;
    this.userService.getDataLoan().subscribe(response => {
      if (response.errorCode !== '0') {
        return;
      }
      if (response.data.length === 0) {
        return;
      }
      this.data = response.data;
      this.assignBrandsToModel();
    });
  }

  openDialog(): void {
    const dialogBrands = this.dialog.open(AllBrandsDialogComponent, {
      width: '400px',
      height: '200px',
      data: this.data
    });

    dialogBrands.afterClosed().subscribe(result => {
      this.loanForm.controls.brand.setValue(result);
      this.closeBrands.close();
      this.changeValueBrand(result);
    });
  }

  assignBrandsToModel() {
    const brands = [];
    for (let i = 0; i < this.data.length; i++) {
      brands.push(this.data[i]['BRAND8001']);
    }
    this.allBrands = new Set(brands);
  }

  changeValueBrand(value) {
    const models = [];
    this.data.forEach((carLoan) => {
      if (carLoan['BRAND8001'] === value) {
        models.push(carLoan['MODEL8001']);
      }
    });
     this.allModels = new Set(models);
  }
  changeValueModel(value) {
    this.allFeeNumbers = [];
    this.data.forEach((carLoan) => {
      if ( carLoan['MODEL8001'] === value && carLoan['BRAND8001'] === this.loanFormValues.brand) {
        this.allFeeNumbers.push(carLoan['FEESCOUNT8001']);
      }
    });
  }
  changeValueFee(value) {
    this.data.forEach((carLoan) => {
      if (carLoan['FEESCOUNT8001'] === value &&
          carLoan['MODEL8001'] === this.loanFormValues.model &&
          carLoan['BRAND8001'] === this.loanFormValues.brand) {
         this.loanForm.controls.feeValue.setValue(carLoan['FEESVALUE8001']);
         this.loanForm.controls.interests.setValue(carLoan['FEESINTEREST8001']);
         this.loanForm.controls.totalPay.setValue(carLoan['TOTALTOPAY8001']);
      }
    });
  }
}
