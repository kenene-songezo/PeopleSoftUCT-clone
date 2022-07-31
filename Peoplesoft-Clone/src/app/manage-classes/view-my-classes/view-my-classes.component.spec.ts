import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyClassesComponent } from './view-my-classes.component';

describe('ViewMyClassesComponent', () => {
  let component: ViewMyClassesComponent;
  let fixture: ComponentFixture<ViewMyClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
