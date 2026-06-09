import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product!: Product;
  @Output() eliminar = new EventEmitter<number>();

  deleteProduct(): void {
    this.eliminar.emit(this.product.id);
  }

}