import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofOfRegistrationComponent } from './proof-of-registration.component';

describe('ProofOfRegistrationComponent', () => {
  let component: ProofOfRegistrationComponent;
  let fixture: ComponentFixture<ProofOfRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofOfRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofOfRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
