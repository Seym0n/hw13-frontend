import { TestBed } from '@angular/core/testing';

import { BookArchiveService } from './book-archive.service';

describe('BookArchiveService', () => {
  let service: BookArchiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookArchiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
