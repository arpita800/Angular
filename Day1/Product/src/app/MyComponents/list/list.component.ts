import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = [
   { id:1, name: 'SOFTSPUN Microfiber Cloth', price: '120' ,color: 'Blue', available: 'Available', image: '/assets/Softspun.jpg' },
   { id:2, name: 'The Derma Co. Sunscreen,', price: '3420' ,color: 'Yellow', available: 'Available', image: '/assets/Sunscreen.jpg'}

  ]
   
}
