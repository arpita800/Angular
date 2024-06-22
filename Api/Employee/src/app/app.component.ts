import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/Employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EmployeeManagementApp';

  employees: Employee[] = [];
  users: any[] = [];
  isLoading = true;
  error = '';
  isEditEmployee = false;
  isEditUser = false;
  selectedEmployee: Employee | null = null;
  selectedUser: any | null = null;

  employee: Employee = {
    employeeId: 0,
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  };

  user: any = {
    id: 0,
    name: '',
    address: '',
    phone: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEmployees();
  }

  private getEmployees() {
    this.http.get<Employee[]>('https://localhost:7173/api/Employees').subscribe(
      data => {
        this.employees = data;
        this.isLoading = false;
      },
      error => {
        this.error = 'Error fetching employees';
        console.error(this.error, error);
        this.isLoading = false;
      }
    );
  }


  addNewEmployee() {
    this.http.post<Employee>('https://localhost:7173/api/Employees', this.employee).subscribe({
      next: () => {
        this.getEmployees();
        this.resetEmployeeForm();
      },
      error: error => {
        console.error('Error adding new employee', error);
      }
    });
  }

  editEmployee(employee: Employee) {
    this.employee = { ...employee };
    this.isEditEmployee = true;
  }

  updateEmployee() {
    this.http.put(`https://localhost:7173/api/Employees/${this.employee.employeeId}`, this.employee).subscribe({
      next: () => {
        this.getEmployees();
        this.resetEmployeeForm();
      },
      error: error => {
        console.error('Error updating employee', error);
      }
    });
  }

  deleteEmployee(employeeId: number) {
    this.http.delete(`https://localhost:7173/api/Employees/${employeeId}`).subscribe({
      next: () => {
        this.getEmployees();
      },
      error: error => {
        console.error('Error deleting employee', error);
      }
    });
  }

  viewEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

  closeEmployeeView() {
    this.selectedEmployee = null;
  }

  resetEmployeeForm() {
    this.employee = {
      employeeId: 0,
      firstName: '',
      lastName: '',
      email: '',
      department: ''
    };
    this.isEditEmployee = false;
  }

  trackByFn(index: number, item: Employee) {
    return item.employeeId;
  }

}
