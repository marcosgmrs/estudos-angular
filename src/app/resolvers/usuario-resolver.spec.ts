import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { usuarioResolver } from './usuario-resolver';
import { provideRouter } from '@angular/router';

describe('usuarioResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideRouter([])
      ]
    });
  });

  it('deve ser criado', () => {
    expect(usuarioResolver).toBeTruthy();
  });
})