import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TarefaService, TodoItem } from '../../services/tarefa';

@Component({
  selector: 'app-tarefas',
  imports: [RouterLink],
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.css'
})
export class Tarefas implements OnInit {
  todos = signal<TodoItem[]>([])
  carregando = signal(true)
  erro = signal('')

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefaService.getTodos().subscribe({
      next: (dados) => {
        this.todos.set(dados)
        this.carregando.set(false)
      },
      error: (err) => {
        this.erro.set('Não foi possível carregar as tarefas. Tente novamente.')
        this.carregando.set(false)
      }
    })
  }
}