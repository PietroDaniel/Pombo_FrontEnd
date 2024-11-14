import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PruuDTO } from '../model/dto/pruuDTO';
import { PruuSeletor } from '../model/seletor/pruu.seletor';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PruuService {

  private readonly API = `${environment.apiUrl}/pruus`;

  constructor(private http: HttpClient) {}

  criarPruu(pruu: PruuDTO): Observable<PruuDTO> {
    return this.http.post<PruuDTO>(`${this.API}`, pruu);
  }

  listarTodos(): Observable<PruuDTO[]> {
    return this.http.get<PruuDTO[]>(`${this.API}`);
  }

  buscarPorId(uuid: string): Observable<PruuDTO> {
    return this.http.get<PruuDTO>(`${this.API}/${uuid}`);
  }

  listarComFiltros(seletor: PruuSeletor, subjectId: number): Observable<PruuDTO[]> {
    let params = new HttpParams();

    if (seletor.texto) params = params.set('texto', seletor.texto);
    if (seletor.dataInicioCriacao) params = params.set('dataInicioCriacao', seletor.dataInicioCriacao.toISOString());
    if (seletor.dataFimCriacao) params = params.set('dataFimCriacao', seletor.dataFimCriacao.toISOString());
    if (seletor.usuarioId) params = params.set('usuarioId', seletor.usuarioId.toString());
    if (seletor.estaCurtido) params = params.set('estaCurtido', seletor.estaCurtido.toString());
    if (seletor.hasPagination()) {
      params = params.set('pagina', seletor.pagina.toString());
      params = params.set('limite', seletor.limite.toString());
    }
    params = params.set('subjectId', subjectId.toString());

    return this.http.get<PruuDTO[]>(`${this.API}`, { params });
  }

  excluirPruu(pruuid: string, usuarioID: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${pruuid}`, {
      params: new HttpParams().set('usuarioID', usuarioID.toString())
    });
  }
}
