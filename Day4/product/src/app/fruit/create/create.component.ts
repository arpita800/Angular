import { Component } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor (private fruitService: FruitService, private router: Router ) {}

  
  formdata: any = {
    name: '',
    quantity: '',
    price: ''
  }

  create() {
    if(this.formdata.name==''){
      alert("mandetory field");
    }
    let res = confirm("new product added!");
    if(res==true){
      this.fruitService.create(this.formdata).subscribe({
        next: (data)=> {
          this.router.navigate(['/fruit/home']);
    },
      error:(er) =>{
        console.log(er)
      }
    });
}
else{
  this.router.navigate(['/fruit/home'])
}
  }

deleteItem(id: number){
  this.fruitService.delete(id).subscribe((data) => { 

  } )
}
}