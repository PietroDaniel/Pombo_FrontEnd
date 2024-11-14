export interface UsuarioDTO {
  senha: string;
  login: string;
  id: number;
  nome: string;
  email: string;
  cpf: string;
  foto?: string;
  role: 'USER' | 'ADMIN';
}
