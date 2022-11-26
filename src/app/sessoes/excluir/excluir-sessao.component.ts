import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessaoService } from '../services/sessao.service';
import { VisualizarSessaoViewModel } from '../view-models/visualizar-sessao.view-model';

@Component({
  selector: 'app-excluir-sessao',
  templateUrl: './excluir-sessao.component.html',
  styles: [
  ]
})
export class ExcluirSessaoComponent implements OnInit {
  public sessaoFormVM: VisualizarSessaoViewModel = new VisualizarSessaoViewModel();


  constructor(
    titulo: Title,
    private sessaoService: SessaoService,
    private route: ActivatedRoute,
    private router: Router,
    private toaster: ToastrService
  ) {
    titulo.setTitle('Exclusão de Sessão — GerenciadorCinema');
  }

  ngOnInit(): void {
    this.sessaoFormVM = this.route.snapshot.data['sessao'];
  }

  public gravar() {
    this.sessaoService.excluir(this.sessaoFormVM.id)
      .subscribe({
        next: (sessaoId) => this.processarSucesso(sessaoId),
        error: (erro) => this.processarFalha(erro)
      });
  }

  private processarSucesso(id: string) {
    this.router.navigate(['/sessoes/listar']);
    this.toaster.success('Sessão excluido com sucesso ', 'Exclusão Sessão')
  }

  private processarFalha(erro: any) {
    if (erro){
      this.toaster.error(erro, 'Aviso')
      console.error(erro);
    }
      
  }

}
