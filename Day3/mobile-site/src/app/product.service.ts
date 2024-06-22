import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    { id: 1, name:'Oneplus Nord CE4', description: 'Processor: The Qualcomm Snapdragon 7 Gen 3 chipset not only gives your Nord CE4 silly levels of OnePlus Fast and Smooth performance, but it also guards your battery life and maximizes power efficiency. ', price: 26999, imageUrl: './assets/img1.jpg' },
    { id: 2, name: 'Samsung Galaxy M15', description: 'DISPLAY - 16.39 Centimeters (6.5"Inch) Super AMOLED Display with 19.5:9 Aspect Ratio, FHD+ Resolution with 1080 x 2340 Pixels , 399 PPI with 16M Colors and 90Hz Refresh Rate', price: 13999, imageUrl: './assets/img2.jpg' },
    { id: 3, name: 'Nokia 2660 Flip 4G Volte keypad Phone', description: 'Brand	Nokia Model Name	2660 FlipNetwork Service Provider	Unlocked for All Carriers Operating System	S30+Cellular Technology	4G', price: 1900,  imageUrl: './assets/img3.jpg' },
    
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}
