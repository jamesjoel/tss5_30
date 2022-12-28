import { TestBed } from '@angular/core/testing';

import { CityPaginationService } from './city-pagination.service';

describe('CityPaginationService', () => {
  let service: CityPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
