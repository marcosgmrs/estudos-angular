import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  tarefas = [
    { nome: 'Aprender Terminal', responsavel: 'Marcos', concluida: true },
    { nome: 'Aprender Git', responsavel: 'Marcos', concluida: true },
    { nome: 'Aprender TypeScript', responsavel: 'Marcos', concluida: true },
    { nome: 'Aprender Angular', responsavel: 'Marcos', concluida: false }
  ]

  getTarefas() {
    return this.tarefas
  }
}