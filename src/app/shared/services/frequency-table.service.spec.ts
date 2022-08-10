import { TestBed } from '@angular/core/testing';

import { FrequencyTableService } from './frequency-table.service';

describe('FrequencyTableService', () => {
  let service: FrequencyTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrequencyTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
