export interface PruuDTO {
  pruuId: string;
  pruuConteudo: string;
  pruuImagem?: string;
  usuarioId: number;
  usuarioNome: string;
  usuarioFotoPerfil?: string;
  quantidadeLikes: number;
  quantidadeDenuncias: number;
  criadoEm: Date;
}
