import { TestBed } from '@angular/core/testing';

import { DatalibraryService } from './datalibrary.service';

describe('DatalibraryService', () => {
  let service: DatalibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatalibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
