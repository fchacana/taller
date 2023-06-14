import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url = "http://localhost:8088/api/v1/products"

  constructor(private httpClient: HttpClient) { }

  getListProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this._url}`)
  }

  createProduct(product: Product): Observable<Object> {
    return this.httpClient.post(`${this._url}`, product)
  }

  updateProduct(id: number, product: Product): Observable<Object> {
    return this.httpClient.put(`${this._url}/${id}`, product);
  }

  getProduct(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this._url}/${id}`);
  }

  deleteProduct(id: number): Observable<Object> {
    return this.httpClient.delete(`${this._url}/${id}`);
  }
}
