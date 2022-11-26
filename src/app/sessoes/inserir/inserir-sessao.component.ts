import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FilmeService } from 'src/app/filmes/services/filme.service';
import { SalaService } from 'src/app/salas/services/sala.service';
import { SessaoService } from '../services/sessao.service';
import { FormsSessaoViewModel } from '../view-models/forms-sessao.view-model';
import { TipoAnimacaoSessaoEnum } from '../view-models/tipo-animacao-sessao.enum';
import { TipoAudioSessaoEnum } from '../view-models/tipo-audio-sessao.enum';

@Component({
  selector: 'app-inserir-sessao',
  templateUrl: './inserir-sessao.component.html',
  styles: [
  ]
})
export class InserirSessaoComponent implements OnInit {

  public formSessao: FormGroup;
  public sessaoFormVM: FormsSessaoViewModel = new FormsSessaoViewModel();

  public filmes = this.filmeService.selecionarTodos();
  public salas = this.salaService.selecionarTodos();

  public tipoAnimacao = Object.values(TipoAnimacaoSessaoEnum)
    .filter(v => !Number.isFinite(v));


  public tipoAudio = Object.values(TipoAudioSessaoEnum)
    .filter(v => !Number.isFinite(v));


  constructor(
    titulo: Title,
    private formBuilder: FormBuilder,
    private router: Router,

    private sessaoService: SessaoService,
    private filmeService: FilmeService,
    private salaService: SalaService,
    private toastr: ToastrService

  ) {
    titulo.setTitle('Cadastrar Sessão - GerenciadorCinema')
  }

  ngOnInit(): void {
    this.formSessao = this.formBuilder.group({

      data: ['', [Validators.required]],
      horarioInicio: ['', [Validators.required]],
      
      valorIngresso: ['', [Validators.required]],
      animacao: ['', [Validators.required]],
      audio: ['', [Validators.required]],

      filme: [''],
      filmeId: ['', [Validators.required]],

      sala: [''],
      salaId: ['', [Validators.required]]

    })
  }


  get data() {
    return this.formSessao.get('data');
  }

  get horarioInicio() {
    return this.formSessao.get('horarioInicio');
  }

  get horarioFim() {
    return this.formSessao.get('horarioFim');
  }

  get valorIngresso() {
    return this.formSessao.get('valorIngresso');
  }

  get animacao() {
    return this.formSessao.get('animacao');
  }

  get audio() {
    return this.formSessao.get('audio');
  }

  get filme() {
    return this.formSessao.get('filme');
  }

  get filmeId() {
    return this.formSessao.get('filmeId');
  }

  get sala() {
    return this.formSessao.get('sala');
  }

  get salaId() {
    return this.formSessao.get('salaId');
  }



  public gravar() {
    if (this.formSessao.invalid) {
      this.toastr.warning('Por favor, Preencher corretamente o formulário. ', 'Aviso')
      return;
    }

    this.sessaoFormVM = Object.assign({}, this.sessaoFormVM, this.formSessao.value);

    this.sessaoService.inserir(this.sessaoFormVM)
      .subscribe({
        next: (sessaoInserida) => this.processarSucesso(sessaoInserida),
        error: (erro) => this.processarFalha(erro)
      });
  }

  private processarSucesso(tarefa: FormsSessaoViewModel) {
    this.router.navigate(['/sessoes/listar']);
    this.toastr.success('Sessão Inserida corretamente. ', 'Inserção de Sessão')

  }

  private processarFalha(erro: any) {
    if (erro) {
      this.toastr.error(erro, 'Inserção de Sessão')
      console.error(erro);
    }
  }




}
