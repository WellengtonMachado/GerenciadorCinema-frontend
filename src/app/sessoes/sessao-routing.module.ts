import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { EditarSessaoComponent } from './editar/editar-sessao.component';
import { ExcluirSessaoComponent } from './excluir/excluir-sessao.component';
import { InserirSessaoComponent } from './inserir/inserir-sessao.component';
import { ListarSessaoComponent } from './listar/listar-sessao.component';
import { FormsSessaoResolver } from './services/forms-sessao.resolver';
import { VisualizarSessaoResolver } from './services/visualizar-sessao.resolver';
import { SessaoAppComponent } from './sessao-app.component';

const routes: Routes = [{
  path: '', component: SessaoAppComponent,
  canActivate: [AuthGuard],
  children: [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    { path: 'listar', component: ListarSessaoComponent },
    { path: 'inserir', component: InserirSessaoComponent },
     {
       path: 'editar/:id',
       component: EditarSessaoComponent,
       resolve: { sessao: FormsSessaoResolver }
    },
    {
       path: 'excluir/:id',
       component: ExcluirSessaoComponent,
      resolve: { sessao: VisualizarSessaoResolver }
     }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessaoRoutingModule { }
