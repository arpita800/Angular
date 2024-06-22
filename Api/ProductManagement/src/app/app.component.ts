import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Product Management App';

  products: Product[] = [];
  isLoading = true;
  error = '';
  isEdit = false;
  selectedProduct: Product | null = null;

  product: Product = {
    productId: 0,
    productName: '',
    categoryId: 0,
    supplierId: 0
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    this.http.get<Product[]>('https://localhost:7257/api/Products').subscribe(
      data => {
        this.products = data;
        this.isLoading = false;
      },
      error => {
        this.error = 'Error fetching products';
        console.error(this.error, error);
        this.isLoading = false;
      }
    );
  }

  addNewProduct() {
    this.http.post<Product>('https://localhost:7257/api/Products', this.product).subscribe({
      next: () => {
        this.getProducts();
        this.resetProductForm();
      },
      error: error => {
        console.error('Error adding new product', error);
      }
    });
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.isEdit = true;
  }

  updateProduct() {
    this.http.put(`https://localhost:7257/api/Products/${this.product.productId}`, this.product).subscribe({
      next: () => {
        this.getProducts();
        this.resetProductForm();
      },
      error: error => {
        console.error('Error updating product', error);
      }
    });
  }

  deleteProduct(productId: number) {
    this.http.delete(`https://localhost:7257/api/Products/${productId}`).subscribe({
      next: () => {
        this.getProducts();
      },
      error: error => {
        console.error('Error deleting product', error);
      }
    });
  }

  viewProduct(product: Product) {
    this.selectedProduct = product;
  }

  closeView() {
    this.selectedProduct = null;
  }

  resetProductForm() {
    this.product = {
      productId: 0,
      productName: '',
      categoryId: 0,
      supplierId: 0
    };
    this.isEdit = false;
  }

  trackByFn(index: number, item: Product) {
    return item.productId;
  }
}
