import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
  _id?: string;
  id: number;
  name: string;
  description: string;
  price: number;
  units: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductData {
  constructor(private http:HttpClient){}
  add(product: Product){
    return this.http.post<any>('http://localhost:3000/api/add', product);
  }

  read(){
    return this.http.get<any>('http://localhost:3000/api/read');
  }

  update(product:Product){
    return this.http.post<any>('http://localhst:3000/api/update', product);
  }

  delete(productID){
    return this.http.post<any>('http://locahost:3000/api/delete', {'productid': productID});
  }
}
