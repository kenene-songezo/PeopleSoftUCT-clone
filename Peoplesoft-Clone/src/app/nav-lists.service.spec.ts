import { TestBed } from '@angular/core/testing';

import { NavListsService } from './nav-lists.service';

describe('NavListsService', () => {
  let service: NavListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
