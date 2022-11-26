import { Timestamp } from "rxjs";
import { FormsFilmeViewModel } from "src/app/filmes/view-models/forms-filme.view-model";
import { VisualizarSalaViewModel } from "src/app/salas/view-models/visualizar-sala.view-model";
import { TipoAnimacaoSessaoEnum } from "./tipo-animacao-sessao.enum";
import { TipoAudioSessaoEnum } from "./tipo-audio-sessao.enum";

export class FormsSessaoViewModel{
  id: string;
  data: Date;
  horarioInicio: Timestamp<string>;
  horarioFim: Timestamp<string>;
  valorIngresso: number;
  animacao: TipoAnimacaoSessaoEnum;
  audio: TipoAudioSessaoEnum;

  filme: FormsFilmeViewModel;
  filmeId: string;

  sala: VisualizarSalaViewModel;
  salaId: string;


}
