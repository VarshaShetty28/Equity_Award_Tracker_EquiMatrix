import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notifications = [
    {
      id: 1,
      title: 'Employee ESOP Vesting',
      message: 'Employee John Doe has vested 500 ESOP units. Update the records accordingly.',
      date: '2024-04-08'
    },
    {
      id: 2,
      title: 'Exercise Request Pending',
      message: 'Employee Jane Smith has submitted an exercise request for 250 units. Please review and approve.',
      date: '2024-04-07'
    },
    {
      id: 3,
      title: 'New RSU Award Allocation',
      message: 'You have allocated 300 new RSU units to Mike Johnson. Ensure the allocation is reflected in the system.',
      date: '2024-04-06'
    },
    {
      id: 4,
      title: 'Bulk Vesting Schedule',
      message: 'Scheduled vesting for 5 employees is due on 2024-06-30. Prepare the vesting batch for processing.',
      date: '2024-04-05'
    }
  ];
}
