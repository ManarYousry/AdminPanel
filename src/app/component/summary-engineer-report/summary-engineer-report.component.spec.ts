import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryEngineerReportComponent } from './summary-engineer-report.component';

describe('SummaryEngineerReportComponent', () => {
  let component: SummaryEngineerReportComponent;
  let fixture: ComponentFixture<SummaryEngineerReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryEngineerReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryEngineerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
