import { Injectable } from '@angular/core';
import { AmortizationScheduleEntry, Schedule } from '../../../ui/src/lib/tabularViewInterface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmartService {

  constructor() { }
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

generateAmortizationSchedule(principal: number, annualInterestRate: number, years: number): Observable<Schedule> {
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
          principal: ((principalPayment * 100)|0)/100,
          interest: ((interestPayment * 100)| 0)/100,
          balance: ((remainingBalance*100)|0)/100
      });
  }
  const scheduleObservable: Observable<Schedule> = of({schedule});

  return scheduleObservable;
}
}
