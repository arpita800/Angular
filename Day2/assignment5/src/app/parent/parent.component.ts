import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  Students= [
    {  id : 1 , Name:'abc',  Gender:'M',  dob: '02-02-2002' ,Fee: 20000},
    {  id : 2 , Name:'xyz',  Gender:'F',  dob: '23-08-1999' ,Fee: 40000},
    {  id : 3 , Name:'arpita',  Gender:'F',  dob: '12-09-2002' ,Fee: 1000},
    {  id : 4 , Name:'ben',  Gender:'M',  dob: '05-11-2002' ,Fee: 10000},
    {  id : 5 , Name:'jane',  Gender:'F',  dob: '01-05-2002' ,Fee: 50000}
 
  ]

}
