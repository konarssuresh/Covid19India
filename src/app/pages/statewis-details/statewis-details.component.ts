import { Component, OnInit } from '@angular/core';
import { IndianStatusApiService } from 'src/app/services/indian-status-api.service';

@Component({
  selector: 'app-statewis-details',
  templateUrl: './statewis-details.component.html',
  styleUrls: ['./statewis-details.component.css']
})
export class StatewisDetailsComponent implements OnInit {
  public errorOnFetching:boolean;
  public stateDetails:any[];
  public filterText:string;
  constructor(private indianStatusService:IndianStatusApiService) { }

  ngOnInit(): void {
    this.indianStatusService.getLatestStatusofIndia().subscribe((res)=>{
      if(res.success){
        this.stateDetails=res.data.regional;
        this.errorOnFetching=false;
      }else{
        this.errorOnFetching=true;
      }
    })
  }

}
