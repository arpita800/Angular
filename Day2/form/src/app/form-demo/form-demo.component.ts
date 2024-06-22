import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css'
})
export class FormDemoComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    
    this.router.navigate(['/display'], { state: { fullName: this.fullName, email: this.email, password: this.password } });
  }
}
 
