import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface VestingRecord {
  awardId: string;
  type: 'ESOP' | 'RSU';
  shares: number;
  grantDate: string;
  finalVestingDate: string;
  strikePrice: number;
}

@Component({
  selector: 'app-vesting-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vestingschedule.component.html'
})
export class VestingScheduleComponent {

  // ✅ MOCK DATA (replace with API later)
  vestingData: VestingRecord[] = [
    {
      awardId: 'AWD-001',
      type: 'ESOP',
      shares: 1000,
      grantDate: '2022-03-15',
      finalVestingDate: '2026-03-15',
      strikePrice: 45
    },
    {
      awardId: 'AWD-002',
      type: 'RSU',
      shares: 500,
      grantDate: '2023-01-10',
      finalVestingDate: '2027-01-10',
      strikePrice: 0
    },
    {
      awardId: 'AWD-003',
      type: 'ESOP',
      shares: 750,
      grantDate: '2024-06-01',
      finalVestingDate: '2028-06-01',
      strikePrice: 60
    }
  ];
}