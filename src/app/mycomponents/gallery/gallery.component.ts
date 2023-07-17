import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ['assets/images/cr1.jpeg','assets/images/cr2.jpeg','assets/images/cr3.jpeg','assets/images/cr4.jpeg','assets/images/eureka1.jpeg','assets/images/eureka3.jpeg','assets/images/eureka4.jpeg','assets/images/eureka5.jpeg','assets/images/eureka6.jpeg','assets/images/eureka7.jpeg','assets/images/eureka8.jpeg']

}
