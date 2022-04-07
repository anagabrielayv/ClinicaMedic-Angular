import { TestBed } from '@angular/core/testing';

import { DatosclientesService } from './datosclientes.service';

describe('DatosclientesService', () => {
  let service: DatosclientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosclientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
