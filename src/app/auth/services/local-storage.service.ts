import { Injectable } from "@angular/core";
import { TokenViewModel, UsuarioTokenViewModel } from "../view-models/token.view-model";

@Injectable()
export class LocalStorageService {

  public salvarDadosLocaisUsuario(resposta: TokenViewModel): void {
    this.salvarTokenUsuario(resposta.chave);
    this.salvarUsuario(resposta.usuarioToken);
  }

  public salvarTokenUsuario(token: string) {
    localStorage.setItem('GerenciadorCinema.token', token);
  }

  public salvarUsuario(usuario: UsuarioTokenViewModel) {
    const jsonString = JSON.stringify(usuario);

    localStorage.setItem('GerenciadorCinema.usuario', jsonString);
  }

  public obterUsuarioLogado() {
    const usuarioJson = localStorage.getItem('GerenciadorCinema.usuario');

    if (usuarioJson)
      return JSON.parse(usuarioJson) as UsuarioTokenViewModel;

    return null;
  }

  public obterTokenUsuario(): string {
    return localStorage.getItem('GerenciadorCinema.token') ?? '';
  }

  public limparDadosLocais() {
    localStorage.removeItem('GerenciadorCinema.token');
    localStorage.removeItem('GerenciadorCinema.usuario');
  }
}
