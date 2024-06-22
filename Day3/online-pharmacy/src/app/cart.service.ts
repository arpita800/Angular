import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];

  constructor() { }

  addToCart(item: any) {
    this.cartItems.push(item); //arrays in JavaScript used to add elements to the end of an array.
  }

  getCartItems() {
    return this.cartItems;
  }
}
