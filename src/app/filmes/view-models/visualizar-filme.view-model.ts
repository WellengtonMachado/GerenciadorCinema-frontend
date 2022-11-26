import { Byte } from "@angular/compiler/src/util";
import { Timestamp } from "rxjs";

export class VisualizarFilmeViewModel {
  id: string;
  Imagem: string;
  titulo: string;
  descricao: string;
  duracao: Timestamp<string>;

}
