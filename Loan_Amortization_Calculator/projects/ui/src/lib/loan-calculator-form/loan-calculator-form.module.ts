import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanCalculatorFormComponent } from './loan-calculator-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoanCalculatorFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[LoanCalculatorFormComponent]
})
export class LoanCalculatorFormModule { }
