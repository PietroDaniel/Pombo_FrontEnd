import { TestBed } from '@angular/core/testing';

import { PruusService } from './pruus.service';

describe('PruusService', () => {
  let service: PruusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
