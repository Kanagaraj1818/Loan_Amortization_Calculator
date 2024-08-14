import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class RegexConstants {
  public static LoanAmount =/^(?:[2-9]\d{4}|[1-9]\d{5,6}|[1-3]\d{6})$/;
  public static InterestRate = /^(10(\.\d+)?|1[1-9](\.\d+)?|2[0-9](\.\d+)?|3[0-9](\.\d+)?|40(\.\d+)?)$/;
  public static LoanTerm = /^(1[2-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-8])$/;
  public static StartDate = /^(2023-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])|2024-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))$/;
}

export function RegexValidator(reg: RegexConstants): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && !control.value.toString().match(reg)) {
        return { error: true };
      }
      return null;
    };
  }