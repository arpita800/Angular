import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    { id: 1, name: 'Pharmeasy Fish Oil ', description: 'Product Detail  Brand Expires on or After 29/06/2025 Country of Origin  India', price: 10, imageUrl: './assets/med1.jpg' },
    { id: 2, name: 'Liveasy Wellness Pain Relief Gel Tube Of 30 G', description: 'Key Features:Quick Absorption  Effective and long-lasting relief Reduces inflammation  Key Ingredients:Diclofenac DiethylamineLinseed Oil Menthol Methyl Salicylate Gel Benzyl Alcohol (Preservative in Gel Form)', price: 20,imageUrl: './assets/med2.jpeg' },
    { id: 3, name: 'Liveasy Wellness Pain Relief Spray 55gm', description: 'Read the label carefully before use.Store it in a cool dry place away from direct sunlight', price: 30,imageUrl: './assets/med3.jpeg'  },
    
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}
