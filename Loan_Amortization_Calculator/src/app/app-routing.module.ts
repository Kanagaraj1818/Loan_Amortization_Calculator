import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmortizationCalculatorComponent } from '../../projects/smart/src/lib/amortization-calculator/amortization-calculator.component';

const routes: Routes = [
  {path:'', redirectTo:'/amortizationCalculator', pathMatch:'full'},
  {path:'amortizationCalculator', component: AmortizationCalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
