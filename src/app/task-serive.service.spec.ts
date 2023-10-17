import { TestBed } from '@angular/core/testing';

import { TaskSeriveService } from './task-serive.service';

describe('TaskSeriveService', () => {
  let service: TaskSeriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskSeriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
