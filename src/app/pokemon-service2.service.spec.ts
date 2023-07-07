import { TestBed } from '@angular/core/testing';

import { PokemonService2Service } from './pokemon-service2.service';

describe('PokemonService2Service', () => {
  let service: PokemonService2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
