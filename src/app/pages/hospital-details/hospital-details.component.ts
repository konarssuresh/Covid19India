import { Component, OnInit } from '@angular/core';
import { IndianStatusApiService } from 'src/app/services/indian-status-api.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent implements OnInit {
  errorFetchingData:boolean;
  summary:any;
  regions:any[];
  source:any[];
  filterText:string;
  constructor(private indianStatusService:IndianStatusApiService,private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
     });
    this.indianStatusService.getHospitalDataIndia().subscribe((res)=>{
      if(res.success){
        this.summary=res.data.summary;
        this.regions=res.data.regional;
        this.source=res.data.sources;
        this.errorFetchingData=false;
      }else{
        this.errorFetchingData=true;
      }
    })
  }

}
