import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCalculatorFormComponent } from './loan-calculator-form.component';

describe('LoanCalculatorFormComponent', () => {
  let component: LoanCalculatorFormComponent;
  let fixture: ComponentFixture<LoanCalculatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanCalculatorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoanCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
