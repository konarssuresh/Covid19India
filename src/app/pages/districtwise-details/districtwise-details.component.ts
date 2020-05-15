import { Component, OnInit, ViewChild } from '@angular/core';
import { IndianStatusApiService } from 'src/app/services/indian-status-api.service';
import State from 'src/app/Models/State';
import District from 'src/app/Models/District';
import { NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-districtwise-details',
  templateUrl: './districtwise-details.component.html',
  styleUrls: ['./districtwise-details.component.css']
})
export class DistrictwiseDetailsComponent implements OnInit {

  districtWiseData:State[];
  filterText:string;
  @ViewChild('myaccordion', {static : true}) accordion: NgbAccordion;
  constructor(private indianStatusService:IndianStatusApiService) {
    this.districtWiseData=[];
   }

  ngOnInit(): void {
    this.getDetailsAndPopulate();
  }

  togglePanel(id){
    this.accordion.toggle(id);
  }

  getDetailsAndPopulate(){
    this.indianStatusService.getLatestDistrictStatusofIndia().subscribe(
      (data)=>{
        //loop through data for each state object
        Object.keys(data).forEach((key,index)=>{
          const stateDetail=new State(key);
          const stateDatas= data[key];
          //loop through state data for each district object
          Object.keys(stateDatas.districtData).forEach((districtKey,districtIndex)=>{
            const districtData=stateDatas.districtData[districtKey];
            const districtDetail=new District(districtKey);
            districtDetail.active=districtData.active;
            districtDetail.discharged=districtData.recovered;
            districtDetail.deceased=districtData.deceased;
            districtDetail.total=districtData.confirmed;
            //created district object and pushed in district details array of state object
            stateDetail.districtDetails.push(districtDetail);
          })
          //created each state object and pushed the state 
          this.districtWiseData.push(stateDetail);
        })
        

      }
    );
  }

}
