import { Pruu } from './pruu';
import { Denuncia } from './denuncia';

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  foto?: string;
  password: string;
  role: Role;
  pruus: Pruu[];
  denuncia: Denuncia[];
  criadoEm: Date;
}
