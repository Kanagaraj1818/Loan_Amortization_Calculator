import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegexConstants, RegexValidator } from './formValidator';

@Injectable({
  providedIn: 'root'
})
export class UiService {
loanAmount:number = 20000;
interestRate:number = 10;
loanTerm:number = 12;
  constructor() {}
  //form for loan input
  loanCalculatorForm = new FormGroup({
    loanAmount: new FormControl(20000, [Validators.required, RegexValidator(RegexConstants.LoanAmount)]),
    interestRate: new FormControl(10, [Validators.required, RegexValidator(RegexConstants.InterestRate)]),
    loanTerm: new FormControl(12, [Validators.required, RegexValidator(RegexConstants.LoanTerm)]),
    startDate: new FormControl(null, [RegexValidator(RegexConstants.StartDate)])
  });
  updateDate(loanAmount:number,interestRate:number,loanTerm:number){
    this.loanAmount = loanAmount;
    this.interestRate = interestRate;
    this.loanTerm = loanTerm;
  }

}
