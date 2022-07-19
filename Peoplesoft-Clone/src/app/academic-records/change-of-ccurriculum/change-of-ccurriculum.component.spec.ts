import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOfCcurriculumComponent } from './change-of-ccurriculum.component';

describe('ChangeOfCcurriculumComponent', () => {
  let component: ChangeOfCcurriculumComponent;
  let fixture: ComponentFixture<ChangeOfCcurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeOfCcurriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeOfCcurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
