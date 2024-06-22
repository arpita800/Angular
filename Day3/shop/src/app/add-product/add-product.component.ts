
import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productName: string = '';
  productPrice: number = 0;
  productDescription='';
  imageUrl= '';

  constructor(private productService : ProductService) { }

  addProduct() {
    this.productService.addProduct({ name: this.productName, price: this.productPrice,description: this.productDescription,imageUrl: this.imageUrl});
    this.productName = '';
    this.productPrice = 0;
    this.productDescription='';
    this.imageUrl= '';
  }
}
