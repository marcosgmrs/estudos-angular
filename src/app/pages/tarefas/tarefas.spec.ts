import { TestBed } from '@angular/core/testing';
import { Tarefas } from './tarefas';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('Tarefas', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarefas],
      providers: [provideRouter([]), provideHttpClient()]
    }).compileComponents();
  });

  it('deve ser criado', () => {
    const fixture = TestBed.createComponent(Tarefas);
    expect(fixture.componentInstance).toBeTruthy();
  });
});