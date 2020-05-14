import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { IndianStatusApiService } from './services/indian-status-api.service';
import { GlobalStatusApiService } from './services/global-status-api.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatewisDetailsComponent } from './pages/statewis-details/statewis-details.component';
import { SortStatePipe } from './pipes/sort-state.pipe';
import { FAQsComponent } from './pages/faqs/faqs.component';
import { HospitalDetailsComponent } from './pages/hospital-details/hospital-details.component';
import { HelplineDetailsComponent } from './pages/helpline-details/helpline-details.component';
import {FormsModule} from '@angular/forms';
import { DistrictwiseDetailsComponent } from './pages/districtwise-details/districtwise-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatewisDetailsComponent,
    SortStatePipe,
    FAQsComponent,
    HospitalDetailsComponent,
    HelplineDetailsComponent,
    DistrictwiseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [IndianStatusApiService,GlobalStatusApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
