import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryShiftReportComponent } from './summary-shift-report.component';

describe('SummaryShiftReportComponent', () => {
  let component: SummaryShiftReportComponent;
  let fixture: ComponentFixture<SummaryShiftReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryShiftReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryShiftReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
