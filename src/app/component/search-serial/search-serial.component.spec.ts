import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSerialComponent } from './search-serial.component';

describe('SearchSerialComponent', () => {
  let component: SearchSerialComponent;
  let fixture: ComponentFixture<SearchSerialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSerialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
