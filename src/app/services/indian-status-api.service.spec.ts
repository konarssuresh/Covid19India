import { TestBed } from '@angular/core/testing';

import { IndianStatusApiService } from './indian-status-api.service';

describe('IndianStatusApiService', () => {
  let service: IndianStatusApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndianStatusApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
