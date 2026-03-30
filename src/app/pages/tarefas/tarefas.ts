import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TarefaService, TodoItem } from '../../services/tarefa';

@Component({
  selector: 'app-tarefas',
  imports: [RouterLink, CommonModule],
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.css'
})
export class Tarefas implements OnInit {
  todos: TodoItem[] = []

  constructor(private tarefaService: TarefaService) {}

ngOnInit(): void {
  this.tarefaService.getTodos().subscribe((dados) => {
    this.todos = dados.slice(0, 10)
  })
}
}