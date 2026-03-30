import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const estaLogado = localStorage.getItem('logado') === 'true'

  if (estaLogado) {
    return true
  }

  router.navigate(['/login'])
  return false
};