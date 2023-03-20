import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from '../interfaces/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productURL="http://curso.i234.me:8080/productos";
  constructor(private http: HttpClient) { }

  getProductos():Observable<IProduct[]> {
    return this.http.get<{productos: IProduct[], ok:boolean}>(this.productURL)
    .pipe(map(response=>response.productos));
  }
}
