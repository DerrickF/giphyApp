import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsDetailComponent } from './search-results-detail.component';

describe('SearchResultsDetailComponent', () => {
  let component: SearchResultsDetailComponent;
  let fixture: ComponentFixture<SearchResultsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
