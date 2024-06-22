import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //info about current loaded component
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee | null = null;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam; //converts the idParam to a number
      const foundEmployee = this.employeeService.getEmployeeById(id);
      this.employee = foundEmployee !== undefined ? foundEmployee : null;
    }
  }
}
