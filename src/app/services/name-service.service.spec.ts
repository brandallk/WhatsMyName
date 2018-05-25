import { TestBed, inject } from '@angular/core/testing';

import { NameServiceService } from './name-service.service';

describe('NameServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameServiceService]
    });
  });

  it('should be created', inject([NameServiceService], (service: NameServiceService) => {
    expect(service).toBeTruthy();
  }));
});
