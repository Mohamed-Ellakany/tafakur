import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SalahTimesService {

  constructor(private _http:HttpClient) { }



// getSalahTimes():Observable<any>{
// return this._http.get(`https://muslimsalat.com/cairo.json?key=15266f1d51d194b2cec28313ca5b02d8`)


// }

getSalahTimes():Observable<any>{
return this._http.get(`https://api.aladhan.com/v1/timingsByAddress/02-11-2023?address=egypt`)


}


}
