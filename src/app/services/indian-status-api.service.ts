import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndianStatusApiService {

  constructor(private http:HttpClient) { }

  
  public  getLatestStatusofIndia() :Observable<any>{
    return this.http.get("https://api.rootnet.in/covid19-in/stats/latest").pipe(
      tap(data => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  
  public getUnOfficialStatusOfInfia():Observable<any>{
    return this.http.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise").pipe(
      tap(data => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  public getContactAndHelplineDetails():Observable<any>{
    return this.http.get("https://api.rootnet.in/covid19-in/contacts").pipe(
      tap(data => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  public getNotificationsAndAdvisories():Observable<any>{
    return this.http.get("https://api.rootnet.in/covid19-in/notifications").pipe(
      tap(data => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  public getHospitalDataIndia():Observable<any>{
    return this.http.get("https://api.rootnet.in/covid19-in/stats/hospitals").pipe(
      tap(data => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
 
  private handleError(err:HttpErrorResponse) {
    let errMsg:string='';
    if (err.error instanceof Error) {
       // A client-side or network error occurred. Handle it accordingly.
       console.log('An error occurred:', err.error.message);
        errMsg=err.error.message;} 
       else {
       // The backend returned an unsuccessful response code.
       // The response body may contain clues as to what went wrong,
       console.log(`Backend returned code ${err.status}`);
          errMsg=err.error.status;
     }
        return throwError(errMsg); 
  }
}
