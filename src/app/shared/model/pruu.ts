import { Usuario } from './usuario';
import { Denuncia } from './denuncia';

export interface Pruu {
  id: string;
  usuario: Usuario;
  likedByUsers: Usuario[];
  denuncias: Denuncia[];
  texto: string;
  imagem?: string;
  bloqueado: boolean;
  excluido: boolean;
  dataHoraCriacao: Date;
}
