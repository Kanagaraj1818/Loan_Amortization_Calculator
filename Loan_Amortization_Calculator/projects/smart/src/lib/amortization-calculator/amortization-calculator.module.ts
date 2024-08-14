import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmortizationCalculatorComponent } from './amortization-calculator.component';
import { CommonHeaderModule } from '../../../../ui/src/lib/common-header/common-header.module';
import { CommonFooterModule } from '../../../../ui/src/lib/common-footer/common-footer.module';
import { LoanCalculatorFormModule } from '../../../../ui/src/lib/loan-calculator-form/loan-calculator-form.module';



@NgModule({
  declarations: [AmortizationCalculatorComponent],
  imports: [
    CommonModule,
    CommonHeaderModule,
    CommonFooterModule,
    LoanCalculatorFormModule
  ],
  exports:[AmortizationCalculatorComponent]
})
export class AmortizationCalculatorModule {}