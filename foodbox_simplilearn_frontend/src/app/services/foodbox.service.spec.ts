import { TestBed } from '@angular/core/testing';

import { FoodboxService } from './foodbox.service';

describe('FoodboxService', () => {
  let service: FoodboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
