import { Usuario } from './usuario';
import { Pruu } from './pruu';

export enum MotivoDenuncia {
  SPAM = 'SPAM',
  OFENSIVO = 'OFENSIVO',
  FALSO = 'FALSO'
}

export enum SituacaoDenuncia {
  PENDENTE = 'PENDENTE',
  ANALISADA = 'ANALISADA'
}

export interface Denuncia {
  uuid: string;
  dataHoraCriacao: Date;
  denunciante: Usuario;
  motivo: MotivoDenuncia;
  situacao: SituacaoDenuncia;
  pruu: Pruu;
}
