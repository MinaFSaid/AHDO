import { Component, OnInit } from '@angular/core';
import { GetRequestsService } from '../services/get-requests.service';


@Component({
  selector: 'app-events-news',
  templateUrl: './events-news.component.html',
  styleUrl: './events-news.component.css'
})
export class EventsNewsComponent implements OnInit  {
constructor(private _GetRequestsService:GetRequestsService){}
events:any[] = [];
  ngOnInit(): void {
    this._GetRequestsService.GetEvents().subscribe((data)=>{
      this.events = data.result;
    })
  }


}
