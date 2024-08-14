import { Component } from '@angular/core';
import { UiService } from '../ui.service';
import { FormGroup } from '@angular/forms';
import { AmortizationScheduleEntry } from '../tabularViewInterface';

@Component({
  selector: 'lib-loan-calculator-form',
  standalone: false,
  templateUrl: './loan-calculator-form.component.html',
  styleUrl: './loan-calculator-form.component.css'
})
export class LoanCalculatorFormComponent {
  loanInputForm!: FormGroup;
  submit:boolean = false;
  monthlyPay!: AmortizationScheduleEntry[];
constructor(private service:UiService){
  this.loanInputForm = this.service.loanCalculatorForm; //assigning form from service
}
calculate():void{
  this.submit = true;
  if(this.loanInputForm.valid) this.monthlyPay = this.service.generateAmortizationSchedule(this.loanInputForm.value['loanAmount'],this.loanInputForm.value['interestRate'],this.loanInputForm.value['loanTerm']);
}
}
