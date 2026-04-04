import { Component, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubUsuario } from '../../services/github';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const dados = this.route.snapshot.data['usuario']
    this.usuario.set(dados)
    this.carregando.set(false)
  }
}