import { TestBed } from '@angular/core/testing';

import { PannellumService } from './pannellum.service';

describe('PannellumService', () => {
  let service: PannellumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PannellumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
