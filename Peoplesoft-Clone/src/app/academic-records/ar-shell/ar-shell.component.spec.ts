import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArShellComponent } from './ar-shell.component';

describe('ArShellComponent', () => {
  let component: ArShellComponent;
  let fixture: ComponentFixture<ArShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
