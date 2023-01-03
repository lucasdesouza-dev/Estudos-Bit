import { TestBed } from '@angular/core/testing';

import { UsuarioExitenteService } from './usuario-exitente.service';

describe('UsuarioExitenteService', () => {
  let service: UsuarioExitenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioExitenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
