import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcademicRecordComponent } from './view-academic-record.component';

describe('ViewAcademicRecordComponent', () => {
  let component: ViewAcademicRecordComponent;
  let fixture: ComponentFixture<ViewAcademicRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAcademicRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAcademicRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
