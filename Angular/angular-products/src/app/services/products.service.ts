import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IProduct } from '../interfaces/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productURL="productos";
  constructor(private http: HttpClient) { }

  getProductos():Observable<IProduct[]> {
    return this.http.get<{productos: IProduct[], ok:boolean}>(this.productURL)
    .pipe(map(response=>response.productos));
  }

  getProducto(idProducto:number):Observable<IProduct> {
    return this.http.get<{producto: IProduct, ok:boolean}>(this.productURL+'/'+idProducto)
    .pipe(map(response=>response.producto));
  }

  modificarEstrella(idProducto:number, cantidadEstrellas:number):Observable<boolean> {
    return this.http.put<{productos:boolean,ok:boolean,error?:string}>
    (this.productURL+"/rating/"+idProducto,{rating:cantidadEstrellas}).pipe(
      map(respuesta=>{
        console.log("Servidor-Productos: "+respuesta.productos);
        if(!respuesta.ok){
          throw respuesta.error;
        }
        return true;
      }),
      catchError((respuesta:HttpErrorResponse)=>throwError(()=>
      new Error("Error al modificar el rating. Respuesta Server: "+respuesta.status+" "+respuesta.message)))
    )}
}
