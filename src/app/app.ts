import { Component } from '@angular/core';
import { Tarefa } from './components/tarefa/tarefa';

@Component({
  selector: 'app-root',
  imports: [Tarefa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tarefas = [
    { nome: 'Aprender Terminal', responsavel: 'Marcos', concluida: true },
    { nome: 'Aprender Git', responsavel: 'Marcos', concluida: true },
    { nome: 'Aprender TypeScript', responsavel: 'Marcos', concluida: true },
    { nome: 'Aprender Angular', responsavel: 'Marcos', concluida: false }
  ]
}