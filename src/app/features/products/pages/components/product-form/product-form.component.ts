import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  nombre: string = '';
  precio: number | null = null;

  constructor(private productService: ProductService) {}

  get formularioValido(): boolean {
    return (
      this.nombre.trim() !== '' &&
      this.precio !== null &&
      this.precio > 0
    );
  }

  crearProducto(): void {
    if (!this.formularioValido) return;
    this.productService.createProduct(this.nombre.trim(), this.precio!);
    this.nombre = '';
    this.precio = null;
  }

}