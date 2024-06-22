import { Component } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:  Router ) { 
  }
  products = [
    { id: 1, name: 'CasaComfo', description:  ' Primary MaterialSolid Wood', price: 26000, image: './assets/product1.jpg' },
    { id: 2, name: 'STONEMUNK', description: 'Anti Skip Fluffy Rug Shaggy Carpet', price: 5200, image: './assets/product2.jpg' },
    { id: 3, name: 'Boldfit Yoga Mat', description: 'Cover Bag TPE Material Extra Thick', price: 1499, image: './assets/product3.jpg' }
  ];

  OnClick(name: any , price: any, description: any){
    this.router.navigate(['product-desc'] , {
      state:{
        pName: name,
        pPrice: price,
        pDescription:description,
      }
    })
  }
}
