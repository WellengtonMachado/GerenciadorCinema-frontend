import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessaoService } from '../services/sessao.service';
import { ListarSessaoViewModel } from '../view-models/listar-sessao.view-model';

@Component({
  selector: 'app-listar-sessao',
  templateUrl: './listar-sessao.component.html',

})
export class ListarSessaoComponent implements OnInit {
public sessoes$: Observable<ListarSessaoViewModel[]>;


  constructor(private sessaoService: SessaoService) { }

  ngOnInit(): void {
    this.sessoes$ = this.sessaoService.selecionarTodos();
  }

}
