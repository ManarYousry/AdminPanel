import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorStatisticsComponent } from './evaluator-statistics.component';

describe('EvaluatorStatisticsComponent', () => {
  let component: EvaluatorStatisticsComponent;
  let fixture: ComponentFixture<EvaluatorStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluatorStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
