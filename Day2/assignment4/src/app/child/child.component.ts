import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  products = [
    { name: 'Product A', price: 20, quantity: 2 },
    { name: 'Product B', price: 20, quantity: 3 },
    { name: 'Product C', price: 45, quantity: 1 }
  ];

  totalValue: number = 0;

  constructor() {
    this.calculateTotalValue();
  }

  calculateTotalValue() {
    let total = 0;
    for (let product of this.products) {
      total += product.price * product.quantity;
    }
    this.totalValue = total;
  }

}
