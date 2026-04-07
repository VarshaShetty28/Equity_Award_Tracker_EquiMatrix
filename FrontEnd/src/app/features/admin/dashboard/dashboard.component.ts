import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // Stats Data
  stats = {
    totalEmployees: 120,
    totalAwardsGranted: '8500 Units',
    totalVestedUnits: '4200 Units',
    pendingRequests: 18
  };

  // Chart Data
  chartData = {
    esopPercentage: 75,
    rsuPercentage: 25
  };

  // Employee Data
  employees = [
    { id: 'EMP001', name: 'John Doe', esops: 500, vestingDate: '2024-06-30' },
    { id: 'EMP002', name: 'Jane Smith', esops: 750, vestingDate: '2024-12-31' },
    { id: 'EMP003', name: 'Mike Johnson', esops: 600, vestingDate: '2025-03-31' },
    { id: 'EMP004', name: 'Sarah Williams', esops: 450, vestingDate: '2024-09-30' },
    { id: 'EMP005', name: 'Robert Brown', esops: 800, vestingDate: '2025-06-30' }
  ];
}

