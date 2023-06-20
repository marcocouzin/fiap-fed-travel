import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDestiniesComponentComponent } from './search-destinies-component.component';

describe('SearchDestiniesComponentComponent', () => {
  let component: SearchDestiniesComponentComponent;
  let fixture: ComponentFixture<SearchDestiniesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDestiniesComponentComponent]
    });
    fixture = TestBed.createComponent(SearchDestiniesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
