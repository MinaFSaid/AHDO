import { HttpClient,HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRequestsService {
  baseUrl:string = "https://41.196.137.6:5054";
  menuItems:any = [];
  constructor(private _HttpClient:HttpClient) {
    this.getMenus().subscribe((data)=>{
      this.menuItems = data.result
    })
   }

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

  GetEvents():Observable<any>
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._HttpClient.get<any>(this.baseUrl + '/Pages/GetEvents',{headers});
  }

  Getblogs():Observable<any>
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._HttpClient.get<any>(this.baseUrl + '/Pages/GetBlogs',{headers});
  }

  GetBlogDetails(id:any):Observable<any>
  {
    const params = new HttpParams().set('blogHeaderId', id)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this._HttpClient.get<any>(this.baseUrl + '/Pages/GetBlogDetails',{params,headers});
  }


}
