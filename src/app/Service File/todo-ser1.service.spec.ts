import { TestBed } from '@angular/core/testing';

import { TodoSer1Service } from './todo-ser1.service';

describe('TodoSer1Service', () => {
  let service: TodoSer1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoSer1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
