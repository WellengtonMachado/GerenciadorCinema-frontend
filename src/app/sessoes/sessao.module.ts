import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SessaoRoutingModule } from './sessao-routing.module';
import { SessaoAppComponent } from './sessao-app.component';
import { FilmeService } from '../filmes/services/filme.service';
import { SalaService } from '../salas/services/sala.service';
import { FormsSessaoResolver } from './services/forms-sessao.resolver';
import { VisualizarSessaoResolver } from './services/visualizar-sessao.resolver';
import { SessaoService } from './services/sessao.service';
import { ListarSessaoComponent } from './listar/listar-sessao.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InserirSessaoComponent } from './inserir/inserir-sessao.component';
import { ExcluirSessaoComponent } from './excluir/excluir-sessao.component';
import { EditarSessaoComponent } from './editar/editar-sessao.component';



@NgModule({
  declarations: [
    SessaoAppComponent,
    ListarSessaoComponent,
    InserirSessaoComponent,
    ExcluirSessaoComponent,
    EditarSessaoComponent
  ],
  imports: [
    CommonModule,
    SessaoRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    CurrencyMaskModule,


  ],

  providers: [SessaoService, FilmeService, SalaService, FormsSessaoResolver, VisualizarSessaoResolver]
})
export class SessaoModule { }
