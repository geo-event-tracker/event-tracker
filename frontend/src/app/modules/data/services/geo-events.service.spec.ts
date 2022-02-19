import { TestBed } from '@angular/core/testing';

import { GeoEventsService } from './geo-events.service';

describe('GeoEventsService', () => {
  let service: GeoEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
