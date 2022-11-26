import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FormsSessaoViewModel } from "../view-models/forms-sessao.view-model";
import { SessaoService } from "./sessao.service";

@Injectable()
export class FormsSessaoResolver implements Resolve<FormsSessaoViewModel> {

  constructor(private sessaoService: SessaoService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<FormsSessaoViewModel> {
    return this.sessaoService.selecionarPorId(route.params['id']);
  }
}
