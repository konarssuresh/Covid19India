import { Component, OnInit } from '@angular/core';
import { IndianStatusApiService } from 'src/app/services/indian-status-api.service';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public errorOnFetching:boolean;

  public summary:any;

  public lastUpdated:Date;

  constructor(private indianCovidService:IndianStatusApiService,private router:Router){
  }


  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
     });
    this.indianCovidService.getLatestStatusofIndia().subscribe((res)=>{
      if(res.success){
        console.log(res.data.summary);
        this.summary=res.data.summary;
        this.lastUpdated=res.lastOriginUpdate;
        this.errorOnFetching=false;
      }else{
        this.summary=null;
        this.errorOnFetching=true;
      }
    })
  }

}
