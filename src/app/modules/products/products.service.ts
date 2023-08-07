import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './interfaces/product.interface';
import { Response } from './interfaces/response.interface'

const endpoint = `${environment.apiUrl}/products`;
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Response<Product>> {
    return this.http.get<Response<Product>>(endpoint);
  }

  createProduct(product: Product): Observable<Product> {
    console.log(product);
    
    return this.http.post<Product>(endpoint, product);
  }
}
