import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { GithubService, GithubUsuario } from '../services/github';

export const usuarioResolver: ResolveFn<GithubUsuario | null> = (route, state) => {
  return inject(GithubService).getUsuario();
};