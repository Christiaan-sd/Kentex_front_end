import { TestBed } from '@angular/core/testing';

import { OptiesService } from './opties.service';

describe('OptiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptiesService = TestBed.get(OptiesService);
    expect(service).toBeTruthy();
  });
});
