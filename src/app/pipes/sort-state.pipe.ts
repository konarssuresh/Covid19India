import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortState'
})
export class SortStatePipe implements PipeTransform {

  transform(value: any[],textfilter:string,type:string): unknown {
    if(type=="cases"){
      if(textfilter){
        value=value.filter((data)=>{
          if(!data.loc.toLowerCase().search(textfilter.toLowerCase())){
            return true;
          }
        })
      }

      if(value && value.length>0){
        value.sort((left,right)=>{
          if((left.confirmedCasesIndian+left.confirmedCasesForeign)<(right.confirmedCasesForeign+right.confirmedCasesIndian)){
            return 1;
          }
  
          if((left.confirmedCasesIndian+left.confirmedCasesForeign)>(right.confirmedCasesForeign+right.confirmedCasesIndian)){
            return -1;
          }
        })
      }
    }

    if(type=="hospitals"){
      if(textfilter){
        if(value && value.length>0){
          value=value.filter((data)=>{
            if(!data.state.toLowerCase().search(textfilter.toLowerCase())){
              return true;
            }
          })
        }
      }
    }

    if(type=="helpline"){
      if(textfilter){
        if(value && value.length>0){
          value=value.filter((data)=>{
            if(!data.loc.toLowerCase().search(textfilter.toLowerCase())){
              return true;
            }
          })
        }
      }
    }


    return value;
  }

}
