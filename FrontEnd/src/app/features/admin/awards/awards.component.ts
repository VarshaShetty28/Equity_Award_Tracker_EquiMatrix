import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './awards.component.html'
})
export class AwardsComponent {

  searchText = '';

  // Original Awards Data
  awards = [
    {
      awardId: 'AWD-001',
      employeeId: 'EMP001',
      grantType: 'ESOP',
      numberOfShares: 1000,
      strikePrice: 120,
      vestingPeriod: 5,
      grantDate: '2024-01-15'
    },
    {
      awardId: 'AWD-002',
      employeeId: 'EMP002',
      grantType: 'RSU',
      numberOfShares: 500,
      strikePrice: 0,
      vestingPeriod: 5,
      grantDate: '2024-02-20'
    }
  ];

  //  Filtered Awards (table uses this)
  filteredAwards = [...this.awards];

  // Search only by Employee ID
  onSearch() {
    const term = this.searchText.toLowerCase().trim();

    if (!term) {
      this.filteredAwards = [...this.awards];
      return;
    }

    this.filteredAwards = this.awards.filter(a =>
      a.employeeId.toLowerCase().includes(term)
    );
  }

  // Popup state
  showEditPopup = false;

  // Edit form data
  editGrant = {
    employeeId: '',
    grantType: 'ESOP',
    numberOfShares: 0,
    strikePrice: 0,
    vestingPeriod: 5,
    grantDate: ''
  };

  openEditPopup(award: any): void {
    this.editGrant = { ...award };
    this.showEditPopup = true;
  }

  closeEditPopup(): void {
    this.showEditPopup = false;
  }
}