export default class District{
    districtName:string;
    active:Number;
    deceased:Number;
    total:Number;
    discharged:Number

    constructor(districtName:string){
        this.districtName=districtName;
    }
}