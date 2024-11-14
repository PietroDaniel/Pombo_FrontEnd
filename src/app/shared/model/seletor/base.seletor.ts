export abstract class BaseSeletor {
  pagina: number;
  limite: number;

  constructor(pagina: number = 1, limite: number = 10) {
    this.pagina = pagina;
    this.limite = limite;
  }

  hasPagination(): boolean {
    return this.limite > 0 && this.pagina > 0;
  }

  getOffset(): number {
    return this.limite * (this.pagina - 1);
  }
}
