import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  user= [
    {name: 'arpita' , email: 'ak@123', age: 20},
    {name: 'naina' , email: 'naina@123', age: 40},
    {name: 'Sam' , email: 'sam@123', age: 50},
  ];
}
