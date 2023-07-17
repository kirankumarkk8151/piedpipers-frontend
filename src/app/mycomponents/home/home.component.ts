import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
quote:any
img1="assets/images/cr3.jpeg"
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://dummyjson.com/quotes/random').subscribe((data)=>{
      this.quote=data
    })
  }
  

}
