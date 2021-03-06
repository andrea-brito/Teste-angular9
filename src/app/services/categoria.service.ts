import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url = 'http://localhost:3000/categoria';

  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os carros
  getCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um carro pelo id
  getCategoriaById(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um carro
  saveCategoria(categoria: Categoria): Observable<Categoria> {
    return this.httpClient.post<Categoria>(this.url, JSON.stringify(categoria), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  
  updateCategoria(categoria: Categoria): Observable<Categoria> {
    return this.httpClient.put<Categoria>(this.url + '/' + categoria.id, JSON.stringify(categoria), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um carro
  deleteCategoria(categoria: Categoria) {
    return this.httpClient.delete<Categoria>(this.url + '/' + categoria.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
