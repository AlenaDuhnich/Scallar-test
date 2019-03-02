import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = environment.api_url;
  constructor(
    private http: HttpClient
  ) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/api/Books`);
  }
}
