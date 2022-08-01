import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClassAndEnrollComponent } from './search-class-and-enroll.component';

describe('SearchClassAndEnrollComponent', () => {
  let component: SearchClassAndEnrollComponent;
  let fixture: ComponentFixture<SearchClassAndEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchClassAndEnrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchClassAndEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
