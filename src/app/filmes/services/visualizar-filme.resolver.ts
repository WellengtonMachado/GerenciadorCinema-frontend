import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { VisualizarFilmeViewModel } from "../view-models/visualizar-filme.view-model";
import { FilmeService } from "./filme.service";

@Injectable()
export class VisualizarFilmeResolver implements Resolve<VisualizarFilmeViewModel> {

  constructor(private filmeService: FilmeService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<VisualizarFilmeViewModel> {
    return this.filmeService.selecionarFilmeCompletaPorId(route.params['id']);
  }
}
