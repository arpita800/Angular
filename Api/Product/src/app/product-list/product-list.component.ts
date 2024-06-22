import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Product {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  supplierName: string;
  quantity: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  purchaseQuantity: number = 1; 

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.http.get<Product[]>('https://localhost:7221/api/Products').subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }

  buyProduct(product: Product): void {
    if (this.purchaseQuantity > product.quantity) {
      alert('Insufficient stock');
      return;
    }

    if (this.purchaseQuantity > 0) {
      this.http.post(`https://localhost:7221/api/Products/${product.productId}/buy`, this.purchaseQuantity).subscribe(
        () => {
          product.quantity -= this.purchaseQuantity;
          this.router.navigate(['/success']);
        },
        error => {
          console.error('Error purchasing product', error);
        }
      );
    } else {
      alert('Invalid quantity');
    }
  }
}