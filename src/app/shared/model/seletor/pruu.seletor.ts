import { BaseSeletor } from './base.seletor';

export class PruuSeletor extends BaseSeletor {
  texto?: string;
  dataInicioCriacao?: Date;
  dataFimCriacao?: Date;
  usuarioId?: number;
  estaCurtido: boolean = false;

  constructor(
    pagina?: number,
    limite?: number,
    texto?: string,
    dataInicioCriacao?: Date,
    dataFimCriacao?: Date,
    usuarioId?: number,
    estaCurtido?: boolean
  ) {
    super(pagina, limite);
    if (texto) this.texto = texto;
    if (dataInicioCriacao) this.dataInicioCriacao = dataInicioCriacao;
    if (dataFimCriacao) this.dataFimCriacao = dataFimCriacao;
    if (usuarioId) this.usuarioId = usuarioId;
    if (estaCurtido !== undefined) this.estaCurtido = estaCurtido;
  }
}
