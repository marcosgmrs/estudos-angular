import { Component, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { GithubService, GithubUsuario } from '../../services/github';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
  encapsulation: ViewEncapsulation.None
})
export class Sobre implements OnInit {
  usuario = signal<GithubUsuario | null>(null)
  carregando = signal(true)

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getUsuario().subscribe((dados) => {
      this.usuario.set(dados)
      this.carregando.set(false)
    })
  }
}