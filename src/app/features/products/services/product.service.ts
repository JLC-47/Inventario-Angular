import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nombre: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productos: Product[] = [];
  private nextId: number = 1;

  getProducts(): Product[] {
    return this.productos;
  }

  createProduct(nombre: string, precio: number): void {
    const nuevo: Product = {
      id: this.nextId,
      nombre: nombre,
      precio: precio
    };
    this.nextId++;
    this.productos.push(nuevo);
  }

  deleteProduct(id: number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }

}