import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FormsFilmeViewModel } from "../view-models/forms-filme.view-model";
import { FilmeService } from "./filme.service";

@Injectable()
export class FormsFilmeResolver implements Resolve<FormsFilmeViewModel> {

  constructor(private filmeService: FilmeService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<FormsFilmeViewModel> {
    return this.filmeService.selecionarPorId(route.params['id']);
  }
}
