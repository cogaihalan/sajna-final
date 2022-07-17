import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpProviderService {
  private apiURL = 'https://fakestoreapi.com/products/';
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL).pipe();
  }
  getCategoriesArr(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiURL + 'categories').pipe();
  }
  getEachCategory(category: string): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.apiURL + `category/${category}`)
      .pipe();
  }
  constructor(private httpClient: HttpClient) {}
}
