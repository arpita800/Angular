import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
slogan: string= "You one stop shop for everything!!"
getSlogan() {
  return 'This is new slogan for this application';
}
}
