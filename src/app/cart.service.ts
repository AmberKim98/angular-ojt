import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor() { }

  /** Add items into cart */
  addToCart(product: Product) {
    this.items.push(product);
    console.log('ITEMS:', this.items);
  }

  /** Remove items from cart */
  clearCart(product: Product) {
    this.items.pop();
    return this.items;
  }

  /** Get cart items */
  getCartItems() {
    return this.items;
  }
}
