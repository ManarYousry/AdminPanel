import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReEvaluateComponent } from './re-evaluate.component';

describe('ReEvaluateComponent', () => {
  let component: ReEvaluateComponent;
  let fixture: ComponentFixture<ReEvaluateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReEvaluateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
