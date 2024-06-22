import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  Student = [
    {  id : 1 , Name:'abc',  Gender:'M',  dob: '02-02-2002' ,Fee: 20000},
    {  id : 2 , Name:'xyz',  Gender:'F',  dob: '23-08-1999' ,Fee: 40000},
    {  id : 3 , Name:'arpita',  Gender:'F',  dob: '12-09-2002' ,Fee: 1000},
    {  id : 4 , Name:'ben',  Gender:'M',  dob: '05-11-2002' ,Fee: 10000},
    {  id : 5 , Name:'jane',  Gender:'F',  dob: '01-05-2002' ,Fee: 50000}
   ];

   totalMale: number=0;
   totalFemale:number=0;
   totalStudents:number=0;

   constructor() {
    this.calculatetotalMale();
    this.calculatetotalFemale();
    this.calculatetotalStudent();
  }
  
  calculatetotalMale() {
    this.totalMale = this.Student.filter(student => student.Gender === 'M').length;
  }

  calculatetotalFemale(){
    this.totalFemale = this.Student.filter(student => student.Gender === 'F').length;
  }

  calculatetotalStudent(){
    this.totalStudents= this.Student.length;
  }
}


