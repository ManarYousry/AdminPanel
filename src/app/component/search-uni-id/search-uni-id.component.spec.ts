import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUNIIDComponent } from './search-uni-id.component';

describe('SearchUNIIDComponent', () => {
  let component: SearchUNIIDComponent;
  let fixture: ComponentFixture<SearchUNIIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUNIIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUNIIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
