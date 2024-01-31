import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateSampleComponent } from './evaluate-sample.component';

describe('EvaluateSampleComponent', () => {
  let component: EvaluateSampleComponent;
  let fixture: ComponentFixture<EvaluateSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
