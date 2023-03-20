import { Component, Input } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

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
  changeRating(estrella:number){
    this.productoHijo.rating=estrella;
  }
}
