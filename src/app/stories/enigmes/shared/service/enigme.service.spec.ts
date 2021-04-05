import { TestBed } from '@angular/core/testing';

import { EnigmeService } from './enigme.service';

describe('EnigmeService', () => {
  let service: EnigmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnigmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
