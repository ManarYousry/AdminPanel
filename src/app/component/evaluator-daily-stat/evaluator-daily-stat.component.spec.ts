import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorDailyStatComponent } from './evaluator-daily-stat.component';

describe('EvaluatorDailyStatComponent', () => {
  let component: EvaluatorDailyStatComponent;
  let fixture: ComponentFixture<EvaluatorDailyStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluatorDailyStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorDailyStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
