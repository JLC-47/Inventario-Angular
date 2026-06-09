import { Component } from '@angular/core';
import { Product, ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  constructor(private productService: ProductService) {}

  get products(): Product[] {
    return this.productService.getProducts();
  }

  eliminar(id: number): void {
    this.productService.deleteProduct(id);
  }

}