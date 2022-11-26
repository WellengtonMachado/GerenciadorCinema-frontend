import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { FilmeService } from '../services/filme.service';
import { ListarFilmeViewModel } from '../view-models/listar-filme.view-model';

@Component({
  selector: 'app-listar-filme',
  templateUrl: './listar-filme.component.html',
  styles: [
  ]
})
export class ListarFilmeComponent implements OnInit {
  public filmes$: Observable<ListarFilmeViewModel[]>;


  constructor(
    titulo: Title,
    private filmeService: FilmeService
    ) {
      titulo.setTitle('Listar Filme - GerenciadorCinema');
    }

  ngOnInit(): void {
    this.filmes$ = this.filmeService.selecionarTodos();

  }

}
