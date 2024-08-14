import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmortizationCalculatorComponent } from './amortization-calculator.component';

describe('AmortizationCalculatorComponent', () => {
  let component: AmortizationCalculatorComponent;
  let fixture: ComponentFixture<AmortizationCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmortizationCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmortizationCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
