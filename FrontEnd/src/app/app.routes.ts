import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { EmplayoutComponent } from './shared/emplayout/emplayout.component';
import { LoginComponent } from './features/auth/login/login.component';

// Admin
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { AwardsComponent } from './features/admin/awards/awards.component';
import { CreateAwardComponent } from './features/admin/awards/create-award/create-award.component';
import { EmployeeComponent } from './features/admin/employees/employees.component';
import { ExerciseRequestComponent } from './features/admin/exercise-request/exercise-request.component';
import { NotificationsComponent } from './features/admin/notifications/notifications.component';
import { ReportsComponent } from './features/admin/reports/reports.component';

//for employee dashboard
import {EmployeeDashboardComponent }from './features/employee/edashboard/edashboard.component';
import { VestingScheduleComponent } from './features/employee/vestingschedule/vestingschedule.component';
import { MyRequestsComponent } from './features/employee/myrequests/myrequests.component';
import { EmployeeNotificationsComponent } from './features/employee/enotifications/enotifications.component';
export const routes: Routes = [

  { path: '', component: LoginComponent },

  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'awards', component: AwardsComponent },
      { path: 'awards/create', component: CreateAwardComponent },
      { path: 'employees', component: EmployeeComponent },
      { path: 'exercise', component: ExerciseRequestComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'reports', component: ReportsComponent }
    ]
  },

  {
    path: 'employee',
    component: EmplayoutComponent,
    children: [
      { path: '', component: EmployeeDashboardComponent },
      { path: 'vesting', component: VestingScheduleComponent },
      { path: 'requests', component: MyRequestsComponent },
      { path: 'notifications', component: EmployeeNotificationsComponent }
    ]
  }

];