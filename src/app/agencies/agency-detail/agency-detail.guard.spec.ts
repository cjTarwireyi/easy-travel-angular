import { TestBed } from '@angular/core/testing';

import { AgencyDetailGuard } from './agency-detail.guard';

describe('AgencyDetailGuard', () => {
  let guard: AgencyDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AgencyDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
