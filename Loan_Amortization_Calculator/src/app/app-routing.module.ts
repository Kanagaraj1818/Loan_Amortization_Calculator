import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmortizationCalculatorComponent } from '../../projects/smart/src/lib/amortization-calculator/amortization-calculator.component';
import { DetailPageComponent } from '../../projects/smart/src/lib/detail-page/detail-page.component';

const routes: Routes = [
  {path:'', redirectTo:'/amortizationCalculator', pathMatch:'full'},
  {path:'amortizationCalculator', component: AmortizationCalculatorComponent},
  {path:'loanDetailPage', component:DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
