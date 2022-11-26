import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, catchError, throwError } from "rxjs";
import { LocalStorageService } from "src/app/auth/services/local-storage.service";
import { environment } from "src/environments/environment";
import { ListarSalaViewModel } from "../view-models/listar-sala.view-model";

@Injectable()
export class SalaService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }


  public selecionarTodos(): Observable<ListarSalaViewModel[]> {
    const resposta = this.http
      .get<ListarSalaViewModel[]>(this.apiUrl + 'salas', this.obterHeadersAutorizacao())
      .pipe(map(this.processarSucesso), catchError(this.processarFalha));

    return resposta;
  }


  private obterHeadersAutorizacao() {
    const token = this.localStorageService.obterTokenUsuario();

    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
  }


  private processarSucesso(resposta: any) {
    if (resposta?.sucesso)
      return resposta.dados;
    else
      return resposta;
  }

  private processarFalha(resposta: any) {
    return throwError(() => new Error(resposta.error.erros[0]));
  }


  }
