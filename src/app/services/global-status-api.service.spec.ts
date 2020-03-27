import { TestBed } from '@angular/core/testing';

import { GlobalStatusApiService } from './global-status-api.service';

describe('GlobalStatusApiService', () => {
  let service: GlobalStatusApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalStatusApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
