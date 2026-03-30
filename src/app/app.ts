import { Component } from '@angular/core';
import { Tarefa } from './components/tarefa/tarefa';
import { TarefaService } from './services/tarefa';

@Component({
  selector: 'app-root',
  imports: [Tarefa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tarefas: { nome: string, responsavel: string, concluida: boolean }[] = []

  constructor(private tarefaService: TarefaService) {
    this.tarefas = this.tarefaService.getTarefas()
  }
}