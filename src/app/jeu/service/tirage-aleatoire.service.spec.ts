import { TestBed, inject } from '@angular/core/testing';

import { TirageAleatoireService } from './tirage-aleatoire.service';

describe('TirageAleatoireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TirageAleatoireService]
    });
  });

  it('should be created', inject([TirageAleatoireService], (service: TirageAleatoireService) => {
    expect(service).toBeTruthy();
  }));
});
