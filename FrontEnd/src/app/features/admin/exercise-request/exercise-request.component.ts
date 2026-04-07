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
    { 
      requestId: 'REQ001', 
      employeeId: 'EMP001', 
      employeeName: 'John Doe', 
      shares: 250,
      status: 'pending'
    },
    { 
      requestId: 'REQ002', 
      employeeId: 'EMP002', 
      employeeName: 'Jane Smith', 
      shares: 500,
      status: 'pending'
    },
    { 
      requestId: 'REQ003', 
      employeeId: 'EMP003', 
      employeeName: 'Mike Johnson', 
      shares: 300,
      status: 'pending'
    },
    { 
      requestId: 'REQ004', 
      employeeId: 'EMP004', 
      employeeName: 'Sarah Williams', 
      shares: 400,
      status: 'pending'
    },
    { 
      requestId: 'REQ005', 
      employeeId: 'EMP005', 
      employeeName: 'Robert Brown', 
      shares: 350,
      status: 'pending'
    }
  ];

  onSearch() {
    // Filter logic can be added here
    console.log('Searching for:', this.searchText);
  }

  onAccept(request: any) {
    request.status = 'accepted';
    console.log('Accepted:', request.requestId);
  }

  onReject(request: any) {
    request.status = 'rejected';
    console.log('Rejected:', request.requestId);
  }
}
