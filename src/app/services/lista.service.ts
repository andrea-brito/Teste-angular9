import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListaService {
  listaUrl = 'https://restcountries.eu/rest/v2/name/united';
  constructor(private http: HttpClient) {}

  listar(){
    return this.http.get<any[]>(`${this.listaUrl}`);
  }
}
