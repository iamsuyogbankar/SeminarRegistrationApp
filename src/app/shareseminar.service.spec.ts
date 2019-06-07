import { TestBed } from '@angular/core/testing';

import { ShareseminarService } from './shareseminar.service';

describe('ShareseminarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareseminarService = TestBed.get(ShareseminarService);
    expect(service).toBeTruthy();
  });
});
