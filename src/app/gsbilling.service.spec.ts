import { TestBed } from '@angular/core/testing';

import { GsbillingService } from './gsbilling.service';

describe('GsbillingService', () => {
  let service: GsbillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GsbillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
