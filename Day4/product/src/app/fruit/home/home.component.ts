import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  
  allFruits: any=[];
  constructor(private fruitService: FruitService, private router:Router){}


  ngOnInit(): void {
    this.fruitService.getAll().subscribe((data) => {
      this.allFruits =data;
    })
  }

  // showData(){
  //   this.fruitService.getAll().subscribe((data) => {
  //     this.allFruits= data;
  //   })
  // }

  deleteItem(id:number){

    let res= confirm("Do you want to delete this data?");
  
          if(res==true){ 
            this.fruitService.delete(id).subscribe({

              next:(data) =>{
                this.allFruits = this.allFruits.filter((data:any) => data.id != id)
              }
            })
          }
          else{
            this.router.navigate(['']);

          }
          console.log(this.allFruits)
    }
}