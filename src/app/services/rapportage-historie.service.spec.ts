import { TestBed } from '@angular/core/testing';

import { RapportageHistorieService } from './rapportage-historie.service';

describe('RapportageHistorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RapportageHistorieService = TestBed.get(RapportageHistorieService);
    expect(service).toBeTruthy();
  });
});
