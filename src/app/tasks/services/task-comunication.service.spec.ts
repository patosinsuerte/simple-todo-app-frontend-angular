import { TestBed } from '@angular/core/testing';

import { TaskComunicationService } from './task-comunication.service';

describe('TaskComunicationService', () => {
  let service: TaskComunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskComunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
