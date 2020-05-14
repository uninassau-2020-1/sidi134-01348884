import { Cep } from './cep.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  baseUrl= "https://viacep.com.br/ws/"
  tipo ="/json" 

  constructor(private http: HttpClient) { }
  
  buscaPorCep(id: string): Observable<Cep> {
    const url = `${this.baseUrl}${id}${this.tipo}`
    return this.http.get<Cep>(url)
  }
}
