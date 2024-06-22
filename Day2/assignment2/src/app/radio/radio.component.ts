import { Component } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css'
})
export class RadioComponent {

  selectedOption: string = ''; 

  setChecked(option: string) {
    this.selectedOption = option;
  }


}
