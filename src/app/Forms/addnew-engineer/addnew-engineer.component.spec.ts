import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewEngineerComponent } from './addnew-engineer.component';

describe('AddnewEngineerComponent', () => {
  let component: AddnewEngineerComponent;
  let fixture: ComponentFixture<AddnewEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
