import { Component } from '@angular/core';

@Component({
  selector: 'app-button-disable',
  templateUrl: './button-disable.component.html',
  styleUrl: './button-disable.component.css'
})
export class ButtonDisableComponent {

  name: string = '';
  age: string='';
  submitted: boolean= false;

  submitForm() : void {
    this.submitted= true;
  }

}
