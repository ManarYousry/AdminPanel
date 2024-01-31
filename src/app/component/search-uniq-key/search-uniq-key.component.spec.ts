import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUniqKeyComponent } from './search-uniq-key.component';

describe('SearchUniqKeyComponent', () => {
  let component: SearchUniqKeyComponent;
  let fixture: ComponentFixture<SearchUniqKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUniqKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUniqKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
