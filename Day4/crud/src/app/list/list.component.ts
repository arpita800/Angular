import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Product } from '../Product.model';
import { error } from 'console';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  formValue !: FormGroup;
  productModelObj : Product= new  Product();

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() :void{
    this.formValue = this.formBuilder.group({
      name : [''],
      price: [''],
      quantity : ['']
    })

  }

  postProductDetails(){
    this.productModelObj.name= this.formValue.value.name;
    this.productModelObj.price= this.formValue.value.price;
    this.productModelObj.quantity= this.formValue.value.quantity;

    this.api.postProduct(this.productModelObj).subscribe(res=> {
      console.log(res);
      alert("Details Added Successfully")
    },
   (  err: any) => {
      alert("something went wrong")
    })
  }
}
