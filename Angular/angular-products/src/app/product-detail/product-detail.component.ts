import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../interfaces/i-product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private routeDirecto: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    // Recibimos parámetro
    this.productService.getProducto(id).subscribe({
      next:(p) => (this.product = p),
      error:(error) => console.error(error)
    }
    );
  }

  changeRating(estrella:number){
    //this.productoHijo.rating=estrella;
    this.productService.modificarEstrella(this.product.id,estrella).subscribe({
      next:respu=>{this.product.rating=estrella;console.log(respu)},
      error:e=>console.log(e)
    });
  }

  goBack(){
    this.routeDirecto.navigate(['/products']);
  }
}
