import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface AwardReport {
  userId: string;
  awardType: 'ESOP' | 'RSU';
  units: number;
  grantDate: string;
  status: 'Active' | 'Exercised';
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.component.html'
})
export class ReportsComponent {

  userId = '';
  selectedFilter: 'ALL' | 'ESOP' | 'RSU' = 'ALL';

  allReports: AwardReport[] = [];
  filteredReports: AwardReport[] = [];

  private MOCK_DATA: AwardReport[] = [
    { userId: 'EMP001', awardType: 'ESOP', units: 100, grantDate: '2023-06-12', status: 'Active' },
    { userId: 'EMP001', awardType: 'RSU', units: 50, grantDate: '2023-08-01', status: 'Exercised' },
    { userId: 'EMP001', awardType: 'ESOP', units: 80, grantDate: '2024-01-15', status: 'Active' }
  ];

  generateReport() {
    this.allReports = this.MOCK_DATA.filter(
      r => r.userId.toLowerCase() === this.userId.toLowerCase()
    );
    this.applyFilter();
  }

  applyFilter() {
    this.filteredReports =
      this.selectedFilter === 'ALL'
        ? this.allReports
        : this.allReports.filter(r => r.awardType === this.selectedFilter);
  }
}