import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';
import { FooterComponent } from './mycomponents/footer/footer.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { AboutComponent } from './mycomponents/about/about.component';
import { ActivitiesComponent } from './mycomponents/activities/activities.component';
import { ContactComponent } from './mycomponents/contact/contact.component';
import { TeamComponent } from './mycomponents/team/team.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'team', component: TeamComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
