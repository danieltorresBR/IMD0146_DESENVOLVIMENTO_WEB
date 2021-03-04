import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContratoInterface } from '../_models/ContratoInterface';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  baseURL = 'https://localhost:5001/api/values';
  getContratos: any;
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getAllContratos(): Observable<ContratoInterface[]> {
    return this.http.get<ContratoInterface[]>(this.baseURL);
  }
  // tslint:disable-next-line:typedef
  getContratosByProcessoTCE(processoTCE: string): Observable<ContratoInterface[]> {
      return this.http.get<ContratoInterface[]>('${this.baseURL}/getByContratoTCE/${processoTCE}');
    }
  // tslint:disable-next-line:typedef
  getContratosById(id: number): Observable<ContratoInterface[]> {
    return this.http.get<ContratoInterface[]>('${this.baseURL}/${id}');
  }
}
