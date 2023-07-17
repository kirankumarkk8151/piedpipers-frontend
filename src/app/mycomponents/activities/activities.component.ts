import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})

export class ActivitiesComponent implements OnInit {
  eventshappened:any
  events:any

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/upcommingevents').subscribe((data)=>{
      this.events=data
      console.log(this.events)
      })
      this.http.get('http://127.0.0.1:8000/eventshappened').subscribe((data)=>{
      this.eventshappened=data
      console.log(this.eventshappened)
      })
  }

}
