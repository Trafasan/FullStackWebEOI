import { Component } from '@angular/core';
import { IProduct } from '../interfaces/i-product'

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  title = 'Mi lista de productos';
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
    image: "Imagen"
  };
  products: IProduct[] = [
    {
      id: 1,
      producto: 'SSD hard drive',
      disponible: new Date('2016-10-03'),
      precio: 75,
      imageUrl: 'assets/ssd.jpg',
      rating: 5,
    },
    {
      id: 2,
      producto: 'LGA1151 Motherboard',
      disponible: new Date('2016-09-15'),
      precio: 96.95,
      imageUrl: 'assets/motherboard.jpg',
      rating: 4,
    },
  ];
}
