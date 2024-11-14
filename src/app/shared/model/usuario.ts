import { Pruu } from './pruu';
import { Denuncia } from './denuncia';
import { Role } from './enums/role'

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
