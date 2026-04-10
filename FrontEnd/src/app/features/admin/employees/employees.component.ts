import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Employee {
  name: string;
  awardType: string;
  units: number;
  email: string;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.component.html'
})
export class EmployeeComponent {

  totalEmployees = 5423;
  totalGrants = 1893;
  pendingRequests = 18;

  searchEmployeeName = '';

  employees: Employee[] = [
    {
      name: 'Jane Cooper',
      awardType: 'ESOP',
      units: 100,
      email: 'jane@microsoft.com',
      status: 'Active'
    },
    {
      name: 'Floyd Miles',
      awardType: 'RSU',
      units: 100,
      email: 'floyd@yahoo.com',
      status: 'Inactive'
    },
    {
      name: 'Ronald Richards',
      awardType: 'ESOP',
      units: 100,
      email: 'ronald@adobe.com',
      status: 'Inactive'
    },
    {
      name: 'Marvin McKinney',
      awardType: 'RSU',
      units: 100,
      email: 'marvin@tesla.com',
      status: 'Active'
    },
    {
      name: 'Jerome Bell',
      awardType: 'RSU',
      units: 100,
      email: 'jerome@google.com',
      status: 'Active'
    },
    {
      name: 'Kathryn Murphy',
      awardType: 'ESOP',
      units: 100,
      email: 'kathryn@microsoft.com',
      status: 'Active'
    }
  ];

  // ✅ This is what the table uses
  filteredEmployees: Employee[] = [...this.employees];

  // ✅ Search by EMPLOYEE NAME
  onSearchEmployee() {
    const value = this.searchEmployeeName.trim().toLowerCase();

    this.filteredEmployees = this.employees.filter(emp =>
      emp.name.toLowerCase().includes(value)
    );
  }
}