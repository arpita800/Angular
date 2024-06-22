import { Component, Input } from '@angular/core';
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
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  @Input() product: Product;
  purchaseQuantity: number = 1;

  constructor(private http: HttpClient, private router: Router) {}

  buyProduct(): void {
    if (this.purchaseQuantity > this.product.quantity) {
      alert('Insufficient stock');
      return;
    }

    if (this.purchaseQuantity > 0) {
      this.http.post(`https://localhost:7221/api/Products/${this.product.productId}/buy`, { quantity: this.purchaseQuantity }).subscribe(
        () => {
          this.product.quantity -= this.purchaseQuantity;
          this.router.navigate(['/success']);
        },
        error => {
          console.error('Error purchasing product', error);
          alert('Error purchasing product');
        }
      );
    } else {
      alert('Invalid quantity');
    }
  }
}
