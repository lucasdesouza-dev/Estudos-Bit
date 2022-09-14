import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  url: string = 'http://localhost:3000/user/login';
  constructor(private httpClient: HttpClient) {}

  autenticar(usuario: string, senha: string) {
    return this.httpClient.post(this.url, {
      userName: usuario,
      password: senha,
    });
  }
}
