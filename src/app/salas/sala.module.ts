import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaRoutingModule } from './sala-routing.module';
import { SalaAppComponent } from './sala-app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarSalaComponent } from './listar/listar-sala.component';
import { SalaService } from './services/sala.service';


@NgModule({
  declarations: [
    SalaAppComponent,
    ListarSalaComponent
  ],
  imports: [
    CommonModule,
    SalaRoutingModule,
    ReactiveFormsModule,
  ],
  providers:[SalaService]
})
export class SalaModule { }
