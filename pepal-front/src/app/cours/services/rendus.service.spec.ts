import { TestBed } from '@angular/core/testing';

import { RendusService } from './rendus.service';

describe('RendusService', () => {
  let service: RendusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RendusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
