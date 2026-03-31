import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export interface GithubUsuario {
  name: string
  login: string
  bio: string
  avatar_url: string
  public_repos: number
  followers: number
  following: number
  html_url: string
}

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private apiUrl = 'https://api.github.com/users/marcosgmrs'

  constructor(private http: HttpClient) {}

  getUsuario() {
    return this.http.get<GithubUsuario>(this.apiUrl).pipe(
      catchError(erro => {
        console.error('Erro ao buscar dados do GitHub:', erro)
        return of(null)
      })
    )
  }
}