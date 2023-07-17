import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
team:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://127.0.0.1:8000/teams/").subscribe( (data)=>{
this.team=data
console.log(this.team)
    })
  }

}
