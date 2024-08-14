import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegexConstants, RegexValidator } from './formValidator';
import { AmortizationScheduleEntry } from './tabularViewInterface';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }
  //form for loan input
  loanCalculatorForm = new FormGroup({
    loanAmount: new FormControl(20000, [Validators.required, RegexValidator(RegexConstants.LoanAmount)]),
    interestRate: new FormControl(10, [Validators.required, RegexValidator(RegexConstants.InterestRate)]),
    loanTerm: new FormControl(12, [Validators.required, RegexValidator(RegexConstants.LoanTerm)]),
    startDate: new FormControl(null, [Validators.required, RegexValidator(RegexConstants.StartDate)])
  });

  calculateMonthlyPayment(principal: number, annualInterestRate: number, years: number): number {
    // Convert annual interest rate to a monthly rate
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    
    // Total number of payments
    const totalPayments = years;
    
    // Monthly payment formula
    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
    
    return principal * (numerator / denominator);
}

generateAmortizationSchedule(principal: number, annualInterestRate: number, years: number): AmortizationScheduleEntry[] {
  const schedule: AmortizationScheduleEntry[] = [];
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const totalPayments = years;
  const monthlyPayment = this.calculateMonthlyPayment(principal, annualInterestRate, years);
  
  let remainingBalance = principal;

  for (let month = 1; month <= totalPayments; month++) {
      const interestPayment = remainingBalance * monthlyInterestRate;
      const principalPayment = monthlyPayment - interestPayment;
      remainingBalance -= principalPayment;
      
      if (remainingBalance < 0) {
          remainingBalance = 0;
      }
      
      schedule.push({
          month,
          payment: ((monthlyPayment * 100) | 0) / 100,
          principal: principalPayment,
          interest: interestPayment,
          balance: remainingBalance
      });
  }
  console.log(schedule);

  return schedule;
}

}
