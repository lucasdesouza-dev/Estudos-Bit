import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './Novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class CadastroUsuarioService {
  urlVerificarUsuario: string = 'http://localhost:3000/user/exists/';
  urlCadastroUsuario: string = 'http://localhost:3000/user/signup';
  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.http.post(this.urlCadastroUsuario, novoUsuario);
  }
  verificarUsusuarioExistente(nomeUsuario: string) {
    return this.http.get(`this.urlVerificarUsuario ${nomeUsuario}`);
  }
}
