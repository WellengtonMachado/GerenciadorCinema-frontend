import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { VisualizarSessaoViewModel } from "../view-models/visualizar-sessao.view-model";
import { SessaoService } from "./sessao.service";

@Injectable()
export class VisualizarSessaoResolver implements Resolve<VisualizarSessaoViewModel> {

  constructor(private sessaoService: SessaoService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<VisualizarSessaoViewModel> {
    return this.sessaoService.selecionarSessaoCompletaPorId(route.params['id']);
  }
}
