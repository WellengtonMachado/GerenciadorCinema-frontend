import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FilmeService } from '../services/filme.service';
import { FormsFilmeViewModel } from '../view-models/forms-filme.view-model';

@Component({
  selector: 'app-inserir-filme',
  templateUrl: './inserir-filme.component.html',
  styles: [
  ]
})
export class InserirFilmeComponent implements OnInit {
  public formFilme: FormGroup;

  public filmeFormVM: FormsFilmeViewModel = new FormsFilmeViewModel();

  constructor(
    titulo: Title,
    private formBuilder: FormBuilder,
    private filmeService: FilmeService,
    private router: Router,
    private toastr: ToastrService
  ) {
    titulo.setTitle('Cadastrar Filme - GerenciadorCinema');
  }

  ngOnInit(): void {
    this.formFilme = this.formBuilder.group({

      imagem: ['', [Validators.required]],
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(5)]],
      duracao: ['', [Validators.required]],

    })
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
      this.toastr.warning('Por favor, Preencher corretamente o formulário. ', 'Aviso')
      return;
    }

    this.filmeFormVM = Object.assign({}, this.filmeFormVM, this.formFilme.value);


    this.filmeService.inserir(this.filmeFormVM)
      .subscribe({
        next: (filmeInserida) => this.processarSucesso(filmeInserida),
        error: (erro) => this.processarFalha(erro)
      })
  }

  private processarSucesso(contato: FormsFilmeViewModel): void {
    this.router.navigate(['/filmes/listar']);
    this.toastr.success('Filme Inserido corretamente. ', 'Inserção de Filme')
  }

  private processarFalha(erro: any) {
    if (erro) {
      this.toastr.error(erro, 'Inserção de FIlme')
      console.error(erro);
    }
  }


}
