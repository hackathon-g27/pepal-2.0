import { TestBed } from '@angular/core/testing';

import { ActusService } from './actus.service';

describe('ActusService', () => {
  let service: ActusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
