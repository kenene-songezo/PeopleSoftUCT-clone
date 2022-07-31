import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidTermComponent } from './mid-term.component';

describe('MidTermComponent', () => {
  let component: MidTermComponent;
  let fixture: ComponentFixture<MidTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidTermComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
