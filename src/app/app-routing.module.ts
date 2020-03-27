import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatewisDetailsComponent } from './pages/statewis-details/statewis-details.component';
import { HospitalDetailsComponent } from './pages/hospital-details/hospital-details.component';
import { FAQsComponent } from './pages/faqs/faqs.component';
import { HelplineDetailsComponent } from './pages/helpline-details/helpline-details.component';


const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"",redirectTo:"/dashboard",pathMatch:"full"},
  {path:"stateStats",component: StatewisDetailsComponent},
  {path:"hospitalStats",component:HospitalDetailsComponent},
  {path:"faqs",component:FAQsComponent},
  {path:"helpline",component: HelplineDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
