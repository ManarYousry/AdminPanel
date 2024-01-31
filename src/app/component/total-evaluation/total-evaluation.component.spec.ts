import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalEvaluationComponent } from './total-evaluation.component';

describe('TotalEvaluationComponent', () => {
  let component: TotalEvaluationComponent;
  let fixture: ComponentFixture<TotalEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
