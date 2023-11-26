import { TestBed } from '@angular/core/testing';

import { OuvrierGuard } from './ouvrier.guard';

describe('OuvrierGuard', () => {
  let guard: OuvrierGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OuvrierGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
