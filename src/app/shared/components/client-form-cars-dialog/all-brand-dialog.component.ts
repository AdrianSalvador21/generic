import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'two-all-brand',
  templateUrl: 'all-brand-dialog.component.html',
  styleUrls: ['all-brand-dialog.component.scss']
})

export class AllBrandsDialogComponent {
  allData: any;
  brandImage = '/assets/images/demo-pages/';
  constructor(
    public dialogBrand: MatDialogRef<AllBrandsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    const assignedData = [];
    for (let i = 0 ; i < data.length; i++) {
      assignedData.push({logo: data[i]['LOGO8001'], brand: data[i]['BRAND8001']});
    }
    this.allData = assignedData.filter((valueBrand, currentIndex, newArray) => {
      return newArray.findIndex(valueTotal =>
        JSON.stringify(valueTotal['brand']) === JSON.stringify(valueBrand['brand'])) === currentIndex
    });
  }
  onNoClick(value): void {
    this.dialogBrand.close(value);
  }
}
