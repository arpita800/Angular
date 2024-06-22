import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'city';
  txt=""
  setText(val:any){
    this.txt = val.target.value
  }

}
