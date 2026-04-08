import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExercisableShare {
  awardId: string;
  type: 'ESOP' | 'RSU';
  shares: number;
  grantDate: string;
  strikePrice: number;
}

interface ExerciseRequest {
  requestId: string;
  type: 'ESOP' | 'RSU';
  shares: number;
  exerciseDate: string;
  strikePrice: number;
  status: 'Approved' | 'Pending' | 'Rejected';
}

@Component({
  selector: 'app-my-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myrequests.component.html'
})
export class MyRequestsComponent {

  //  Tab control
  activeTab: 'exercise' | 'requests' = 'exercise';

  // Exercisable shares (MOCK)
  exercisableShares: ExercisableShare[] = [
    {
      awardId: 'AWD-101',
      type: 'ESOP',
      shares: 500,
      grantDate: '2022-04-12',
      strikePrice: 40
    },
    {
      awardId: 'AWD-102',
      type: 'RSU',
      shares: 300,
      grantDate: '2023-01-18',
      strikePrice: 0
    }
  ];

  //  My requests (MOCK)
  exerciseRequests: ExerciseRequest[] = [
    {
      requestId: 'REQ-001',
      type: 'ESOP',
      shares: 200,
      exerciseDate: '2025-02-05',
      strikePrice: 40,
      status: 'Approved'
    },
    {
      requestId: 'REQ-002',
      type: 'ESOP',
      shares: 150,
      exerciseDate: '2025-03-10',
      strikePrice: 45,
      status: 'Pending'
    }
  ];

  //  Actions (backend-ready hooks)
  switchTab(tab: 'exercise' | 'requests') {
    this.activeTab = tab;
  }

  exerciseShares(award: ExercisableShare) {
    // API call later
    console.log('Exercise clicked', award);
  }
}
``