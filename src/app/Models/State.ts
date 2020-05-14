import District from './District';

export default class StateWise{
    public stateName:string;
    public districtDetails:District[];
    public isOpen:boolean;

    constructor(stateName:string){
        this.stateName=stateName;
        this.districtDetails=[];
        this.isOpen=false;
    }
}