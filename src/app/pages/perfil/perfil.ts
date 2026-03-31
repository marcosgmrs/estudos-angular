import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil implements OnInit {
  email = signal('')

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.email.set(localStorage.getItem('email') ?? '')
  }

  sair(): void {
    localStorage.removeItem('logado')
    localStorage.removeItem('email')
    this.router.navigate(['/login'])
  }
}