import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FilmeService } from 'src/app/filmes/services/filme.service';
import { SalaService } from 'src/app/salas/services/sala.service';
import { SessaoService } from '../services/sessao.service';
import { FormsSessaoViewModel } from '../view-models/forms-sessao.view-model';
import { TipoAnimacaoSessaoEnum } from '../view-models/tipo-animacao-sessao.enum';
import { TipoAudioSessaoEnum } from '../view-models/tipo-audio-sessao.enum';

@Component({
  selector: 'app-editar-sessao',
  templateUrl: './editar-sessao.component.html',

})
export class EditarSessaoComponent implements OnInit {
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
    private fb: FormBuilder,
    private sessaoService: SessaoService,
    private filmeService: FilmeService,
    private salaService: SalaService,
    private route: ActivatedRoute,
    private router: Router,
    private toaster: ToastrService
  ) {
    titulo.setTitle('Cadastrar Sessão - GerenciadorCinema')
  }

  ngOnInit(): void {
    this.sessaoFormVM = this.route.snapshot.data['sessao'];

    this.formSessao = this.fb.group({

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

    this.formSessao.patchValue({
      id: this.sessaoFormVM.id,
      data: this.sessaoFormVM.data.toString().split("T")[0],
      horarioInicio: this.sessaoFormVM.horarioInicio,
      horarioFim: this.sessaoFormVM.horarioFim,
      valorIngresso: this.sessaoFormVM.valorIngresso,
      animacao: this.sessaoFormVM.animacao,
      audio: this.sessaoFormVM.audio,
      filmeId: this.sessaoFormVM.filmeId,
      salaId: this.sessaoFormVM.salaId

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
      this.toaster.warning('Por favor, Preencher corretamente o formulário. ', 'Aviso')
      return;
    }


    this.sessaoFormVM = Object.assign({}, this.sessaoFormVM, this.formSessao.value);

    this.sessaoService.editar(this.sessaoFormVM)
      .subscribe({
        next: (sessaoEditado) => this.processarSucesso(sessaoEditado),
        error: (erro) => this.processarFalha(erro)
      });
  }

  private processarSucesso(sessaoEditado: FormsSessaoViewModel) {
    this.router.navigate(['/sessoes/listar']);
    this.toaster.success('Sessão editada com sucesso', 'Edição de Sessão')
  }

  private processarFalha(erro: any) {
    this.toaster.warning(erro, 'Edição de Sessão')
    console.log(erro);
  }

}
