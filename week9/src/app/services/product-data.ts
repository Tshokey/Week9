import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  _id?: string;
  id: number;
  name: string;
  description: string;
  price: number;
  units: number;
}

@Injectable({ providedIn: 'root' })
export class ProductData {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  add(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/read`);
  }

  update(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}/update`, product);
  }

  delete(productID: string): Observable<Product[]> {
    return this.http.post<Product[]>(`${this.baseUrl}/delete`, { productid: productID });
  }
}
