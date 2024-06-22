import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrl: './product-desc.component.css'
})
export class ProductDescComponent {
  product : any;

  constructor(private router: ActivatedRoute) {}
    pName= history.state.pName;
    pPrice= history.state.pPrice;
    pDescription= history.state.pDescription;
  }
