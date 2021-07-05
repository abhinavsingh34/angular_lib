import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable } from 'rxjs';

// export interface assetsLink{
//   link:string;
// }

// export const LINK = new InjectionToken<string>("link");

@Injectable()
export class DatalibraryService {
  public dataReceived$
  constructor(private http: HttpClient) {


  }

  getRepos(dataLink:string): Observable<any> {
    console.log( this.http.get('/assets/data.json'))
    //return  this.http.get('/assets/data.json')
   //console.log("see the link in service"+this.link)
   console.log("see the link in service"+dataLink)
  // return  this.http.get(this.link)
  return  this.http.get(dataLink)
  }
//   getRepos1(): Promise<any> {
//     return  this.http.get('/assets/data.json').toPromise()
//   }

//  async getRepos2(): Promise<any> {
//     return await this.http.get('/assets/data.json').toPromise()
//   }
}
