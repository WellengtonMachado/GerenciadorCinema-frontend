import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmeRoutingModule } from './filme-routing.module';
import { FilmeAppComponent } from './filme-app.component';
import { ListarFilmeComponent } from './listar/listar-filme.component';
import { FilmeService } from './services/filme.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InserirFilmeComponent } from './inserir/inserir-filme.component';
import { EditarFilmeComponent } from './editar/editar-filme.component';
import { FormsFilmeResolver } from './services/forms-filme.resolver';
import { VisualizarFilmeResolver } from './services/visualizar-filme.resolver';
import { ExcluirFilmeComponent } from './excluir/excluir-filme.component';





@NgModule({
  declarations: [
    FilmeAppComponent,
    ListarFilmeComponent,
    InserirFilmeComponent,
    EditarFilmeComponent,
    ExcluirFilmeComponent
  ],
  imports: [
    CommonModule,
    FilmeRoutingModule,
    ReactiveFormsModule,



  ],
  providers: [FilmeService, FormsFilmeResolver,VisualizarFilmeResolver]
})
export class FilmeModule { }
