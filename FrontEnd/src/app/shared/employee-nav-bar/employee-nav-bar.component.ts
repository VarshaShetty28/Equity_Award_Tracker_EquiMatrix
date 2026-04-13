import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './employee-nav-bar.component.html'
})
export class EmployeeNavBarComponent {
  employeeName = 'Aarav Sharma';
}