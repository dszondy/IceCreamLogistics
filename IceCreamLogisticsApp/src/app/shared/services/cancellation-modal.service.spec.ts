import { TestBed } from '@angular/core/testing';

import { CancellationModalService } from './cancellation-modal.service';

describe('CancellationModalService', () => {
  let service: CancellationModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancellationModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
