import { Component, Input } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() mostrarImagen!:boolean;
  @Input() productoHijo!:IProduct;
  @Input() estilo1!:boolean;
  @Input() estilo2!:boolean;

  constructor(private productosServicio:ProductsService) {}

  changeRating(estrella:number){
    this.productosServicio.modificarEstrella(this.productoHijo.id, estrella).subscribe({
      next:respu=>{this.productoHijo.rating=estrella;console.log(respu)},
      error:e=>console.log(e)
    });
  }
}
