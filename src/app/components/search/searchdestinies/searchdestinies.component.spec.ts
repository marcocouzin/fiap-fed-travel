import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdestiniesComponent } from './searchdestinies.component';

describe('SearchdestiniesComponent', () => {
  let component: SearchdestiniesComponent;
  let fixture: ComponentFixture<SearchdestiniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchdestiniesComponent]
    });
    fixture = TestBed.createComponent(SearchdestiniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
