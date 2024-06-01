import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetRequestsService } from './../services/get-requests.service';

@Component({
  selector: 'app-blogs-details',
  templateUrl: './blogs-details.component.html',
  styleUrl: './blogs-details.component.css'
})
export class BlogsDetailsComponent implements OnInit{
  id: string ="";
  blogDetails:any[]=[];

  constructor(private route: ActivatedRoute, private _GetRequestsService:GetRequestsService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this._GetRequestsService.GetBlogDetails(this.id).subscribe((data)=>{
      console.log(data);
      this.blogDetails = data.result;
    })
  }
}
