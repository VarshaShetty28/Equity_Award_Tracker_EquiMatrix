import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edashboard.component.html'
})
export class EmployeeDashboardComponent {

  overviewStats = {
    equityAwardsValue: 12000,
    sharesValue: 8500,
    currentShareholdings: 4200,
    pendingExerciseRequests: 18
  };

  esopData = {
    unvested: 75,
    vested: 25
  };

  rsuData = {
    unvested: 75,
    vested: 25
  };
}
