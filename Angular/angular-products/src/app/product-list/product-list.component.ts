import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/i-product'
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  title = 'Mi lista de productos';
  constructor(private servicio:ProductsService){}
  ngOnInit(){
    this.servicio.getProductos().subscribe(prods => this.products = prods);
    /*this.servicio.getProductos().subscribe({
      next:prods => this.products = prods, // Success function
      error:error => console.error(error), // Error function (optional)
      complete:() => console.log("Products loaded") // Finally function (optional)
    });*/
  }
  showImage = true;
  toggleImage() {
    this.showImage = !this.showImage;
  }
  estilo1 = false;
  estilo2 = false;
  cambiarEstilo() {
    const inputEstilo1:HTMLInputElement = <HTMLInputElement> document.querySelector("[name='estilos']");
    if (inputEstilo1.checked) {
      this.estilo1 = true;
      this.estilo2 = false;
    }
    else {
      this.estilo1 = false;
      this.estilo2 = true;
    }
  }
  filterSearch = "";
  cabeceras = {
    producto: 'Producto',
    precio: 'Precio',
    disponible: 'Disponible',
    image: "Imagen",
    rating: "Puntuación"
  };
  products:IProduct[] = [];
}
