import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise-request',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercise-request.component.html',
  styleUrl: './exercise-request.component.css'
})
export class ExerciseRequestComponent {
  searchText = '';

  exerciseRequests = [
    { requestId: 'REQ001', employeeId: 'EMP001', employeeName: 'John Doe', shares: 250, status: 'pending' },
    { requestId: 'REQ002', employeeId: 'EMP002', employeeName: 'Jane Smith', shares: 500, status: 'pending' },
    { requestId: 'REQ003', employeeId: 'EMP003', employeeName: 'Mike Johnson', shares: 300, status: 'pending' },
    { requestId: 'REQ004', employeeId: 'EMP004', employeeName: 'Sarah Williams', shares: 400, status: 'pending' },
    { requestId: 'REQ005', employeeId: 'EMP005', employeeName: 'Robert Brown', shares: 350, status: 'pending' }
  ];

  filteredRequests = [...this.exerciseRequests];

  // 🔍 Search only by Employee ID
  onSearch() {
    const term = this.searchText.toLowerCase().trim();

    if (!term) {
      this.filteredRequests = [...this.exerciseRequests];
      return;
    }

    this.filteredRequests = this.exerciseRequests.filter(a =>
      a.employeeId.toLowerCase().includes(term)
    );
  }

  // ============================================
  // ✅ POPUP LOGIC (ONLY CODE ADDED)
  // ============================================
  showPopup = false;
  popupAction: 'accept' | 'reject' | null = null;
  selectedRequest: any = null;

  openPopup(request: any, action: 'accept' | 'reject') {
    this.selectedRequest = request;
    this.popupAction = action;
    this.showPopup = true;
  }

  confirmAction() {
    if (this.popupAction === 'accept') {
      this.selectedRequest.status = 'accepted';
      console.log('Accepted:', this.selectedRequest.requestId);
    }

    if (this.popupAction === 'reject') {
      this.selectedRequest.status = 'rejected';
      console.log('Rejected:', this.selectedRequest.requestId);
    }

    this.closePopup();
  }

  closePopup() {
    this.showPopup = false;
    this.popupAction = null;
    this.selectedRequest = null;
  }
}