import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { usuarioResolver } from './resolvers/usuario-resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'tarefas',
    loadComponent: () => import('./pages/tarefas/tarefas').then(m => m.Tarefas)
  },
{
  path: 'sobre',
  loadComponent: () => import('./pages/sobre/sobre').then(m => m.Sobre),
  resolve: { usuario: usuarioResolver }
},
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil').then(m => m.Perfil),
    canActivate: [authGuard]
  },
  {
    path: 'diario',
    loadComponent: () => import('./pages/diario/diario').then(m => m.Diario)
  }
]