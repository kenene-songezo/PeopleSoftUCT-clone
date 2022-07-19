import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestYearResultsComponent } from './request-year-results.component';

describe('RequestYearResultsComponent', () => {
  let component: RequestYearResultsComponent;
  let fixture: ComponentFixture<RequestYearResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestYearResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestYearResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
