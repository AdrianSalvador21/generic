import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {DemoRoutingModule} from './demo-routing.module';
import {HomePage} from './pages/home/home.page';
import {DemoTwoPage} from './pages/demo-two/demo-two.page';
import {DemoThreePage} from './pages/demo-three/demo-three.page';
import {DemoFourPage} from './pages/demo-four/demo-four.page';
import {DemoFivePage} from './pages/demo-five/demo-five.page';
import {DemoSixPage} from './pages/demo-six/demo-six.page';
import {LoanClientFormComponent} from './pages/loanClientForm/loan-client-form-demo.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DemoRoutingModule
  ],
  declarations: [
    HomePage,
    DemoTwoPage,
    DemoThreePage,
    DemoFourPage,
    DemoFivePage,
    DemoSixPage,
    LoanClientFormComponent
  ],
  entryComponents: [
  ]
})

export class DemoModule {
}
