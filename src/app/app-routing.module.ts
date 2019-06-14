import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TryComponent } from './try/try.component';
import { DashboardComponent } from './components/login-overview/dashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ServiceesComponent } from './servicees/servicees.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'gotoekta', component: TryComponent },
  { path: 'login', component: DashboardComponent },
  { path: 'adminlogin', component: AdminloginComponent},
  { path: 'restaurant', component: RestaurantComponent},
  { path: 'servicees', component: ServiceesComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
