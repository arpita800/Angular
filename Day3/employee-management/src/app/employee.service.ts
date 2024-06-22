
import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  designation: string;
}

@Injectable({
  providedIn: 'root' 
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'John Doe', designation: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', designation: 'Product Manager' },
    { id: 3, name: 'Alice Johnson', designation: 'UI/UX Designer' }
  ];

  constructor() { }

  getAllEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find(emp => emp.id === id);
  }
  
}
