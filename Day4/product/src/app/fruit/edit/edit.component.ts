import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { FruitService } from '../fruit.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent {
  constructor(private route:ActivatedRoute,private fruitService:FruitService,private router :Router){}

  formdata :any = {
    name: '',
    quantity: 0,
    price:0
  }

  // recId!: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = (param.get('id')) ;
      this.getByid(id);
    })
  }
  
  getByid(id:any) {
    this.fruitService.edit(id).subscribe((data) => { 
      
        this.formdata= data;
    })
  }

  update(){
    this.fruitService.update(this.formdata).subscribe({
      next: (data) => {
        alert("product updated successfully!")
        this.router.navigate(['/fruit/home']);
      },
      error: (er) =>{
        console.log(er)
      }
    });
  }

}
