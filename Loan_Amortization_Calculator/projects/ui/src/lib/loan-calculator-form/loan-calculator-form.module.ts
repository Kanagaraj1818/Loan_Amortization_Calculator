import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanCalculatorFormComponent } from './loan-calculator-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartViewModule } from './chart-view/chart-view.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoanCalculatorFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChartViewModule,
    RouterModule
  ],
  exports:[LoanCalculatorFormComponent]
})
export class LoanCalculatorFormModule { }
