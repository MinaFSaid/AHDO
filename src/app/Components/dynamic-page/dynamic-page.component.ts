import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetRequestsService } from '../services/get-requests.service';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent implements OnInit{
  id:any;
  pageDetails:any = [];
  pagePhoto:any = [];
  loading:any = true;

  constructor(private route: ActivatedRoute, private _GetRequestsService:GetRequestsService,public sanitizer: DomSanitizer){
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this._GetRequestsService.GetPageDetails(this.id).subscribe((data)=>{
        // console.log(data.result);
        this.pageDetails = data.result.body;
        this.pagePhoto = data.result.pagePhotos;
        this.loading = false;
        // console.log(data);
      })
    });
  }

  ngOnInit(): void {
    
  }
}
