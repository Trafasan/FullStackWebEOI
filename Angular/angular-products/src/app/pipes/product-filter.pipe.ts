import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(productos: IProduct[], filtro:string): IProduct[] {
    const filtroDef=filtro ? filtro.toLocaleLowerCase() : null;
    return filtroDef ? productos.filter(elem=>elem.producto.toLocaleLowerCase().includes(filtroDef)):productos;
  }

}
