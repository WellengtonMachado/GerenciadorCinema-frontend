import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { AuthGuard } from './auth/services/auth.guard';
import { LoginGuard } from './auth/services/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'conta/autenticar', pathMatch: 'full' },
  { path: 'conta/autenticar', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'conta/registrar', component: RegistroComponent, canActivate: [LoginGuard] },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'filmes',
    loadChildren: () => import('./filmes/filme.module')
      .then(m => m.FilmeModule)
  },
  {
    path: 'salas',
    loadChildren: () => import('./salas/sala.module')
      .then(m => m.SalaModule)

  },
  {
    path: 'sessoes',
    loadChildren: () => import('./sessoes/sessao.module')
      .then(m => m.SessaoModule)

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
