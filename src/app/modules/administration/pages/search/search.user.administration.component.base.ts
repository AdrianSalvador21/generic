import {OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroupDirective} from '@angular/forms';
import {SearchService} from '../../../../core/services/search.service';
import {BaseComponent} from '../../../../core/components/base/base.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.reducer';


export class SearchUserAdministrationBaseComponent extends BaseComponent implements OnInit {
  name: string;
  data;
  constructor(protected fb: FormBuilder,
              protected searchService: SearchService,
              protected store: Store<AppState>) {
    super(store);
  }
  ngOnInit() {
  }

  sendName(name: string) {
    this.loading = true;
    this.name = name;
    this.data = undefined;
    this.searchService.searchName(this.name).subscribe(response => {

      if (response.errorCode !== '0') {
        return;
      }
      if (response.data.length === 0) {
        this.loading = false;
        return;
      }
      this.loading = false;
      this.data = response.data;
    });
  }
}
