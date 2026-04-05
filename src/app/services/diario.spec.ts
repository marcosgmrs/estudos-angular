import { TestBed } from '@angular/core/testing';
import { DiarioService } from './diario';

describe('DiarioService', () => {
  let service: DiarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiarioService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar mensagens', () => {
    const mensagens = service.getMensagens()
    expect(mensagens().length).toBeGreaterThan(0)
  });
})