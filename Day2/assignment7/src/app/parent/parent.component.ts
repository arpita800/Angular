import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  products = [
    { name: 'Product A', price: 20, quantity: 2 },
    { name: 'Product B', price: 20, quantity: 3 },
    { name: 'Product C', price: 45, quantity: 1 }
  ];

}
