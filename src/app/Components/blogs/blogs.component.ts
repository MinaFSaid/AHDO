import { Component, OnInit } from '@angular/core';
import { GetRequestsService } from '../services/get-requests.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit{
constructor(private _GetRequestsService:GetRequestsService){}
blogs:any[] = [];
  ngOnInit(): void {
    this._GetRequestsService.Getblogs().subscribe((data)=>{
      // console.log(data);
      this.blogs = data.result;
    })
  }

}
