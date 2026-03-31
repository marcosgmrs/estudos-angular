import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService, GithubUsuario } from '../../services/github';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil implements OnInit {
  email = signal('')
  usuario = signal<GithubUsuario | null>(null)
  carregando = signal(true)

  constructor(
    private router: Router,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {
    this.email.set(localStorage.getItem('email') ?? '')
    this.githubService.getUsuario().subscribe((dados) => {
      this.usuario.set(dados)
      this.carregando.set(false)
    })
  }

  sair(): void {
    localStorage.removeItem('logado')
    localStorage.removeItem('email')
    this.router.navigate(['/login'])
  }
}