import { TestBed } from '@angular/core/testing';

import { ApiconsumerService } from './apiconsumer.service';

describe('ApiconsumerService', () => {
  let service: ApiconsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiconsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
