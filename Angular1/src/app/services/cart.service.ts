import { Injectable } from '@angular/core';
import { Product } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];


  constructor() { }

  addProduct(producto: Product): void {
    this.cart.push(producto);
  }

  getCart(): Product[] {
    return this.cart;
  }

  removeProduct(producto: Product): void {
    const index = this.cart.findIndex(p => p.id === producto.id);
    if (index >= 0) {
      this.cart.splice(index, 1);
    }
  }

  emptyCart(): void {
    this.cart.splice(0, this.cart.length);
  }


}
