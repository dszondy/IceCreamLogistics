import { TestBed } from '@angular/core/testing';

import { InventoryChangeService } from './inventory-change.service';

describe('InventoryChangeService', () => {
  let service: InventoryChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
