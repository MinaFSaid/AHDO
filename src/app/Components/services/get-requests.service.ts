import { HttpClient,HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRequestsService {
  baseUrl:string = "http://41.196.137.6:5053";
  constructor(private _HttpClient:HttpClient) { }

  getMenus():Observable<any>
  {
    // const params = new HttpParams().set('categoryId', data)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._HttpClient.get<any>(this.baseUrl + '/Pages/GetNavBarMenus',{headers});
  }

  GetPageDetails(id:any):Observable<any>
  {
    const params = new HttpParams().set('PageId', id)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._HttpClient.get<any>(this.baseUrl + '/Pages/GetPageDetails',{params,headers});
  }

}
