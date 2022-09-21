import { TestBed } from '@angular/core/testing';

import { UserNotTakenService } from './user-not-taken.service';

describe('UserNotTakenService', () => {
  let service: UserNotTakenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserNotTakenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
