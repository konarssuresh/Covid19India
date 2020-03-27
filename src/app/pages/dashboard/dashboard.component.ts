import { Component, OnInit } from '@angular/core';
import { IndianStatusApiService } from 'src/app/services/indian-status-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public errorOnFetching:boolean;

  public summary:any;

  constructor(private indianCovidService:IndianStatusApiService){
  }


  ngOnInit(): void {
    this.indianCovidService.getLatestStatusofIndia().subscribe((res)=>{
      if(res.success){
        console.log(res.data.summary);
        this.summary=res.data.summary;
        this.errorOnFetching=false;
      }else{
        this.summary=null;
        this.errorOnFetching=true;
      }
    })
  }

}
