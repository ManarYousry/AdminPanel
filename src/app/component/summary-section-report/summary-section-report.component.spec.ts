import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarySectionReportComponent } from './summary-section-report.component';

describe('SummarySectionReportComponent', () => {
  let component: SummarySectionReportComponent;
  let fixture: ComponentFixture<SummarySectionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummarySectionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarySectionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
