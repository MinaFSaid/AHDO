import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetRequestsService } from '../services/get-requests.service';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent implements OnInit{
  id:any;
  pageDetails:any = [];
  pagePhoto:any = [];
  constructor(private route: ActivatedRoute, private _GetRequestsService:GetRequestsService){
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this._GetRequestsService.GetPageDetails(this.id).subscribe((data)=>{
        // console.log(data.result);
        this.pageDetails = data.result.pageBodies;
        this.pagePhoto = data.result.pagePhotos;
        console.log(data);
      })
    });
  }

  ngOnInit(): void {
    
  }
}
