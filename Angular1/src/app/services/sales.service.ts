import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from '../models/sale';

@Injectable({
  providedIn: 'root'
})
export class SalesService {


  private _url = 'http://localhost:4200/api/v1/sales';

  constructor(private httpClient: HttpClient) { }


  createSale(sale: Sale): Observable<Object> {
    return this.httpClient.post(`${this._url}`, sale)
  }

  getListSales(): Observable<Sale[]> {
    return this.httpClient.get<Sale[]>(`${this._url}`)
  }

  getSale(id:number):Observable<Sale>{
    return this.httpClient.get<Sale>(`${this._url}/${id}`);
  }


}
