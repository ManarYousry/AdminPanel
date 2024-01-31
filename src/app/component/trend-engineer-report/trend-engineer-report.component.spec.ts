import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendEngineerReportComponent } from './trend-engineer-report.component';

describe('TrendEngineerReportComponent', () => {
  let component: TrendEngineerReportComponent;
  let fixture: ComponentFixture<TrendEngineerReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendEngineerReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendEngineerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
