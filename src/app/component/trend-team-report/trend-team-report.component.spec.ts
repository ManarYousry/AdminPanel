import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendTeamReportComponent } from './trend-team-report.component';

describe('TrendTeamReportComponent', () => {
  let component: TrendTeamReportComponent;
  let fixture: ComponentFixture<TrendTeamReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendTeamReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendTeamReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
