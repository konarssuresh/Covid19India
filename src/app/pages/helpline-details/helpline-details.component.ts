import { Component, OnInit } from '@angular/core';
import { IndianStatusApiService } from 'src/app/services/indian-status-api.service';

@Component({
  selector: 'app-helpline-details',
  templateUrl: './helpline-details.component.html',
  styleUrls: ['./helpline-details.component.css']
})
export class HelplineDetailsComponent implements OnInit {
  errorWhileFetching:boolean;
  regions:any[];
  primary:any;
  filterText:string;
  constructor(private indianDetailsService:IndianStatusApiService) { }

  ngOnInit(): void {
    this.indianDetailsService.getContactAndHelplineDetails().subscribe((res)=>{
      if(res.success){
        this.errorWhileFetching=false;
        this.primary=res.data.contacts.primary;
        this.regions=res.data.contacts.regional;
      }else{
        this.errorWhileFetching=true;
      }
    })
  }

}
