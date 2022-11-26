import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FilmeService } from '../services/filme.service';
import { FormsFilmeViewModel } from '../view-models/forms-filme.view-model';

@Component({
  selector: 'app-editar-filme',
  templateUrl: './editar-filme.component.html',
  styles: [
  ]
})
export class EditarFilmeComponent implements OnInit {
  public formFilme: FormGroup;

  public filmeFormVM: FormsFilmeViewModel = new FormsFilmeViewModel();


  constructor(
    titulo: Title,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private filmeService: FilmeService,
    private toaster: ToastrService

  ) {
    titulo.setTitle('Editar Filme - GerenciadorCinema');
  }

  ngOnInit(): void {
    this.filmeFormVM = this.route.snapshot.data['filme'];

    this.formFilme = this.fb.group({
      imagem: ['', [Validators.required]],
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(5)]],
      duracao: ['', [Validators.required]],

    });

    this.formFilme.patchValue({
      id: this.filmeFormVM.id,
      imagem: this.filmeFormVM.imagem ? this.filmeFormVM.imagem : '',
      titulo: this.filmeFormVM.titulo,
      descricao: this.filmeFormVM.descricao,
      duracao: this.filmeFormVM.duracao

    });

  }

  get imagem() {
    return this.formFilme.get('imagem');
  }

  get titulo() {
    return this.formFilme.get('titulo');
  }

  get descricao() {
    return this.formFilme.get('descricao');
  }

  get duracao() {
    return this.formFilme.get('duracao');
  }


  public gravar() {
    if (this.formFilme.invalid) {
      this.toaster.warning('Por favor, Preencher corretamente o formulário. ', 'Aviso')
      return;
    }


    this.filmeFormVM = Object.assign({}, this.filmeFormVM, this.formFilme.value);

    this.filmeService.editar(this.filmeFormVM)
      .subscribe({
        next: (filmeEditado) => this.processarSucesso(filmeEditado),
        error: (erro) => this.processarFalha(erro)
      })
  }

  private processarSucesso(filmeEditado: FormsFilmeViewModel) {
    this.router.navigate(['/filmes/listar']);
    this.toaster.success('Filme editado com sucesso', 'Edição de Filme')
  }

  private processarFalha(erro: any) {
    this.toaster.warning(erro, 'Edição de Filme')
    console.log(erro);
  }

}
