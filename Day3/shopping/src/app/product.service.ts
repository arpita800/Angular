import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    // Sample product data
    { id: 1, name: 'Jam & Honey Penguin, Plush/Soft Toy', description: ': It is made from super-soft, skin-friendly material so that your baby can enjoy the toy safely', price: 199, imageUrl: 'https://m.media-amazon.com/images/I/61A2ddWFQxL._SX425_.jpg' },
    { id: 2, name: 'Campus Mens North Plus Running Shoes', description: ' These shoes for men have a supportive design and a knitted vamp that feels soft and comfortable on your skin.', price: 1299, imageUrl: 'https://m.media-amazon.com/images/I/71T1K4ZFPkL._SY500_.jpg' },
    { id: 3, name: ' Lenovo ThinkPad 7th Gen', description: 'Product will be in refurbished condition and may have a few visible signs of earlier use. Backed by minimum six months Warranty', price: 19499, imageUrl: 'https://m.media-amazon.com/images/I/51KJBESauQL._SY450_.jpg' },
    { id: 4, name: 'Boult Audio Just Launched Z40 Ultra', description: '32dB Active Noise Cancellation  Dual Device Pairing: Seamlessly switch', price: 1299, imageUrl: 'https://m.media-amazon.com/images/I/51yBgs6oJIL._SX425_.jpg' },
   
  ];

  getProductById(id: number): Product | null {
    return this.products.find(product => product.id === id) || null;
  }

  getProducts(): Product[] {
    return this.products;
  }
}
