import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation) {
      const state = navigation.extras.state as { fullName: string, email: string, password: string };
      this.fullName = state.fullName;
      this.email = state.email;
      this.password = state.password;
    } else {
      this.router.navigate(['/']);
    }
  }
}
