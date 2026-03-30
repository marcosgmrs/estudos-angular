import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface TodoItem {
  id: number
  title: string
  completed: boolean
}

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<TodoItem[]>(this.apiUrl)
  }
}