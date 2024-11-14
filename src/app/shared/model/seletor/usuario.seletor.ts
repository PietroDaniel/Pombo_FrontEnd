import { BaseSeletor } from './base.seletor';

export class UsuarioSeletor extends BaseSeletor {
  nome?: string;
  email?: string;
  cpf?: string;

  constructor(
    pagina?: number,
    limite?: number,
    nome?: string,
    email?: string,
    cpf?: string
  ) {
    super(pagina, limite);
    if (nome) this.nome = nome;
    if (email) this.email = email;
    if (cpf) this.cpf = cpf;
  }
}
