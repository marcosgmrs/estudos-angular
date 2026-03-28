import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  imports: [],
  templateUrl: './tarefa.html',
  styleUrl: './tarefa.css'
})
export class Tarefa {
  @Input() tarefa!: { nome: string, responsavel: string, concluida: boolean }
}