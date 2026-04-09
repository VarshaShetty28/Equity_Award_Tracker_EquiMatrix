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

  hasSearched = false;

  private MOCK_DATA: AwardReport[] = [
    { userId: 'EMP001', awardType: 'ESOP', units: 100, grantDate: '2023-06-12', status: 'Active' },
    { userId: 'EMP001', awardType: 'RSU', units: 50, grantDate: '2023-08-01', status: 'Exercised' },
    { userId: 'EMP001', awardType: 'ESOP', units: 80, grantDate: '2024-01-15', status: 'Active' }
  ];

  generateReport() {
    this.hasSearched = true;

    const searchId = this.userId.trim().toLowerCase();

    this.allReports = this.MOCK_DATA.filter(
      r => r.userId.toLowerCase() === searchId
    );

    this.applyFilter();
  }

  applyFilter() {
    this.filteredReports =
      this.selectedFilter === 'ALL'
        ? this.allReports
        : this.allReports.filter(r => r.awardType === this.selectedFilter);
  }

  downloadReport() {
    const headers = ['Award Type', 'Units', 'Grant Date', 'Status'];

    const rows = this.filteredReports.map(r => [
      r.awardType,
      r.units,
      r.grantDate,
      r.status
    ]);

    const csvContent =
      [headers, ...rows].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `award-report-${this.userId}.csv`;
    link.click();

    URL.revokeObjectURL(url);
  }
}
