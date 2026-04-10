import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Notification {
  id: string;
  message: string;
  date: string;
  isRead: boolean;
}

@Component({
  selector: 'app-employee-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enotifications.component.html'
})
export class EmployeeNotificationsComponent {

  //  MOCK NOTIFICATIONS (Backend-ready)
  notifications: Notification[] = [
    {
      id: 'N001',
      message: 'Your ESOP vesting has been completed.',
      date: '2025-04-05',
      isRead: false
    },
    {
      id: 'N002',
      message: 'Your exercise request has been approved.',
      date: '2025-04-02',
      isRead: true
    },
    {
      id: 'N003',
      message: 'New RSU grant has been assigned to you.',
      date: '2025-03-28',
      isRead: true
    }
  ];

  // Optional future hook
  markAsRead(notification: Notification) {
    notification.isRead = true;
    //  Replace with API call later
  }
}
