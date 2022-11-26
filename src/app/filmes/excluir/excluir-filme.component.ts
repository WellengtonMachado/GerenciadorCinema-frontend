import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FilmeService } from '../services/filme.service';
import { VisualizarFilmeViewModel } from '../view-models/visualizar-filme.view-model';

@Component({
  selector: 'app-excluir-filme',
  templateUrl: './excluir-filme.component.html',
  styles: [
  ]
})
export class ExcluirFilmeComponent implements OnInit {
  public filmeFormVM: VisualizarFilmeViewModel = new VisualizarFilmeViewModel();



  constructor(
    titulo: Title,
    private route: ActivatedRoute,
    private router: Router,
    private filmeService: FilmeService,
    private toaster: ToastrService
  ) {
    titulo.setTitle('Excluir Filme - GerenciadorCinema')
  }

  ngOnInit(): void {
    this.filmeFormVM = this.route.snapshot.data['filme'];
  }


  public gravar() {
    this.filmeService.excluir(this.filmeFormVM.id)
      .subscribe({
        next: (filmeId) => this.processarSucesso(filmeId),
        error: (erro) => this.processarFalha(erro)
      })
  }

  private processarSucesso(filmeId: string): void {
    this.router.navigate(['/filmes/listar']);
    this.toaster.success('Filme excluido com sucesso ', 'Exclusão Filme')
  }

  private processarFalha(erro: any) {
    if (erro) {
      this.toaster.error(erro, 'Aviso')
      console.error(erro);
    }
  }

}
