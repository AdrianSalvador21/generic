import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {AppConfig} from '../../config/app.config';
import {DemoTwoPage} from './pages/demo-two/demo-two.page';
import {DemoThreePage} from './pages/demo-three/demo-three.page';
import {DemoFourPage} from './pages/demo-four/demo-four.page';
import {DemoFivePage} from './pages/demo-five/demo-five.page';
import {DemoSixPage} from './pages/demo-six/demo-six.page';
import {LoanClientFormComponent} from './pages/loanClientForm/loan-client-form-demo.component';

const heroesRoutes: Routes = [
   {path: AppConfig.routes.demo.home.key, component: HomePage},
   {path: AppConfig.routes.demo.demoTwo.key, component: DemoTwoPage},
   {path: AppConfig.routes.demo.demoThree.key, component: DemoThreePage},
   {path: AppConfig.routes.demo.demoFour.key, component: DemoFourPage},
   {path: AppConfig.routes.demo.demoFive.key, component: DemoFivePage},
   {path: AppConfig.routes.demo.demoSix.key, component: DemoSixPage},
   {path: AppConfig.routes.demo.loanClientForm.key, component: LoanClientFormComponent},
   {path: '**', pathMatch: 'full', redirectTo: '/' + AppConfig.routes.demo.home.url}
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule {
}
