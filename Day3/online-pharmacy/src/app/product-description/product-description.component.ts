import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id'); // current value of the 'id' 
    if (idParam !== null) {
      const id = +idParam; //'id' parameter from a string to a number
      this.product = this.productService.getProductById(id);
    }
     else {
    }
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.router.navigate(['cart']);
  }
}
