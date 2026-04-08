import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { AwardsComponent } from './features/admin/awards/awards.component';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { EmployeeComponent } from './features/admin/employees/employees.component';
import { ExerciseRequestComponent } from './features/admin/exercise-request/exercise-request.component';
import { NotificationsComponent } from './features/admin/notifications/notifications.component';
import { ReportsComponent } from './features/admin/reports/reports.component';

export const routes: Routes = [

  { path: '', component: LoginComponent },

  {
    path: 'admin',
    component: LayoutComponent, // WRAPPER
    children: [
      { path: '', component: DashboardComponent }, // temporary
      { path: 'awards', component: AwardsComponent },
      { path: 'employees', component: EmployeeComponent },
      { path: 'exercise', component: ExerciseRequestComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'reports', component: ReportsComponent }
    ]
  }

];