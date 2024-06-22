
import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent {
  products: any[];
  selectedProduct: any; 

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  viewProductDetails(product: any) {
    this.selectedProduct = product;
  }
}

