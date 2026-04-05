import { TestBed } from '@angular/core/testing';
import { TarefaService } from './tarefa';
import { provideHttpClient } from '@angular/common/http';

describe('TarefaService', () => {
  let service: TarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(TarefaService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar um Observable', () => {
    const resultado = service.getTodos()
    expect(resultado).toBeTruthy()
  });
})