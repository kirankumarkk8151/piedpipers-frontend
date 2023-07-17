import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';
import { FooterComponent } from './mycomponents/footer/footer.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { AboutComponent } from './mycomponents/about/about.component';
import { ActivitiesComponent } from './mycomponents/activities/activities.component';
import { ContactComponent } from './mycomponents/contact/contact.component';
import { TeamComponent } from './mycomponents/team/team.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './mycomponents/gallery/gallery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'team', component: TeamComponent },
  { path: 'gallery', component: GalleryComponent },

  
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    ActivitiesComponent,
    TeamComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
    CommonModule,
    
 

  ],
  exports: [RouterModule],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
