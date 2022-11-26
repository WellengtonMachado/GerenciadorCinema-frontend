import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LocalStorageService } from './auth/services/local-storage.service';
import { UsuarioService } from './core/services/usuario.service';

@Component({
  selector: 'app-root',
  template:  `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  ` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GerenciadorCinema';

  constructor(
    titulo: Title,
    private usuarioService: UsuarioService,
    private localStorageService: LocalStorageService
  ) {
    titulo.setTitle("Início - GerenciadorCinema");
    this.logarUsuarioPersistido();
  }

  private logarUsuarioPersistido() {
    const usuarioPersistido = this.localStorageService.obterUsuarioLogado();

    if (usuarioPersistido)
      this.usuarioService.logarUsuario(usuarioPersistido);
  }
}
