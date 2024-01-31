import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorMonthStatComponent } from './evaluator-month-stat.component';

describe('EvaluatorMonthStatComponent', () => {
  let component: EvaluatorMonthStatComponent;
  let fixture: ComponentFixture<EvaluatorMonthStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluatorMonthStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorMonthStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
