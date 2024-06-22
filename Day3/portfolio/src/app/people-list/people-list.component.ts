import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit{

  people: any[] =[];

  constructor(private router : Router, private DataService: DataService){}

  ngOnInit(): void {
    this.people= this.DataService.getPeople();
  }

  showDetails(personId: number){
    this.router.navigate(['people-detail', personId]);
  }


}
