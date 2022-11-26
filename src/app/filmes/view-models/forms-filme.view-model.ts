import { Byte } from "@angular/compiler/src/util";
import { Timestamp } from "rxjs";

export class FormsFilmeViewModel {
  public id: string;
  public imagem: string;
  public titulo: string;
  public descricao: string;
  public duracao: Timestamp<string>;

}
