import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { AwardsComponent } from './features/admin/awards/awards.component';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';

export const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'a/w', component: DashboardComponent },

  {
    path: 'admin',
    component: LayoutComponent, // WRAPPER
    children: [
      { path: '', component: AwardsComponent }, // temporary
      { path: 'awards', component: AwardsComponent }
    ]
  }

];