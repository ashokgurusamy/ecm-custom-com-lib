import { TestBed } from '@angular/core/testing';

import { CustTitleService } from './cust-title.service';

describe('CustTitleService', () => {
  let service: CustTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
