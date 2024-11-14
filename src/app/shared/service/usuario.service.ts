import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroment';
import { UsuarioDTO } from '../model/dto/usuarioDTO';
import { UsuarioSeletor } from '../model/seletor/usuario.seletor';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) {}

  criarUsuario(usuario: UsuarioDTO): Observable<UsuarioDTO> {
    return this.http.post<UsuarioDTO>(`${this.API}`, usuario);
  }

  atualizarUsuario(id: number, usuario: UsuarioDTO): Observable<UsuarioDTO> {
    return this.http.put<UsuarioDTO>(`${this.API}/${id}`, usuario);
  }

  listarTodos(): Observable<UsuarioDTO[]> {
    return this.http.get<UsuarioDTO[]>(`${this.API}`);
  }

  buscarPorId(id: number): Observable<UsuarioDTO> {
    return this.http.get<UsuarioDTO>(`${this.API}/${id}`);
  }

  listarComFiltros(seletor: UsuarioSeletor): Observable<UsuarioDTO[]> {
    let params = new HttpParams();
    if (seletor.nome) params = params.set('nome', seletor.nome);
    if (seletor.email) params = params.set('email', seletor.email);
    if (seletor.cpf) params = params.set('cpf', seletor.cpf);
    if (seletor.hasPagination()) {
      params = params.set('pagina', seletor.pagina.toString());
      params = params.set('limite', seletor.limite.toString());
    }
    return this.http.get<UsuarioDTO[]>(`${this.API}`, { params });
  }

  excluirUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
