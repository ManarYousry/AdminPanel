import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTeamReportComponent } from './summary-team-report.component';

describe('SummaryTeamReportComponent', () => {
  let component: SummaryTeamReportComponent;
  let fixture: ComponentFixture<SummaryTeamReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryTeamReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTeamReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
