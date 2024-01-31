import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReEvaluationReportComponent } from './re-evaluation-report.component';

describe('ReEvaluationReportComponent', () => {
  let component: ReEvaluationReportComponent;
  let fixture: ComponentFixture<ReEvaluationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReEvaluationReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReEvaluationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
