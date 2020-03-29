import { Component, OnInit } from '@angular/core';
import { IndianStatusApiService } from 'src/app/services/indian-status-api.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-statewis-details',
  templateUrl: './statewis-details.component.html',
  styleUrls: ['./statewis-details.component.css']
})
export class StatewisDetailsComponent implements OnInit {
  public errorOnFetching:boolean;
  public stateDetails:any[];
  public filterText:string;
  public lastUpdated:Date;
  constructor(private indianStatusService:IndianStatusApiService,private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
     });
    this.indianStatusService.getLatestStatusofIndia().subscribe((res)=>{
      if(res.success){
        this.stateDetails=res.data.regional;
        this.lastUpdated=res.lastOriginUpdate;
        this.errorOnFetching=false;
      }else{
        this.errorOnFetching=true;
      }
    })
  }

}
