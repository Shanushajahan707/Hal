import { TestBed } from '@angular/core/testing';

import { AzanService } from './azan.service';

describe('AzanService', () => {
  let service: AzanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
