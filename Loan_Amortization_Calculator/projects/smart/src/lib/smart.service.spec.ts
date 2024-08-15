import { TestBed } from '@angular/core/testing';
import { SmartService } from './smart.service';  
import { Schedule, AmortizationScheduleEntry } from '../../../ui/src/lib/tabularViewInterface';
import { of } from 'rxjs';


describe('SmartService', () => {
  let service: SmartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('calculateMonthlyPayment', () => {
    it('should calculate the correct monthly payment', () => {
      const principal = 1000;
      const annualInterestRate = 5;
      const years = 1;

      const expectedPayment = 1000 * (0.05 / 12) / (1 - Math.pow(1 + (0.05 / 12), -12));

      const result = service.calculateMonthlyPayment(principal, annualInterestRate, years);

      expect(result).toBeCloseTo(expectedPayment, 2); // Check to 2 decimal places
    });
  });
});
describe('SmartService', () => {
  let service: SmartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateAmortizationSchedule', () => {
    it('should generate the correct amortization schedule', (done) => {
      const principal = 1000;
      const annualInterestRate = 5;
      const years = 1;

      const monthlyPayment = service.calculateMonthlyPayment(principal, annualInterestRate, years);
      const expectedSchedule: AmortizationScheduleEntry[] = [];
      const monthlyInterestRate = annualInterestRate / 12 / 100;
      const totalPayments = years * 12;
      let remainingBalance = principal;

      for (let month = 1; month <= totalPayments; month++) {
        const interestPayment = remainingBalance * monthlyInterestRate;
        const principalPayment = monthlyPayment - interestPayment;
        remainingBalance -= principalPayment;

        if (remainingBalance < 0) {
          remainingBalance = 0;
        }

        expectedSchedule.push({
          month,
          payment: Math.round(monthlyPayment * 100) / 100,
          principal: Math.round(principalPayment * 100) / 100,
          interest: Math.round(interestPayment * 100) / 100,
          balance: Math.round(remainingBalance * 100) / 100
        });
      }

      service.generateAmortizationSchedule(principal, annualInterestRate, years).subscribe(schedule => {
        expect(schedule.schedule).toEqual(expectedSchedule);
        done(); // Mark the test as completed
      });
    });
  });
});

