import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { VisionMissionValuesComponent } from './Components/vision-mission-values/vision-mission-values.component';
import { CodeOfConductsComponent } from './Components/code-of-conducts/code-of-conducts.component';
import { AboutTeamComponent } from './Components/about-team/about-team.component';
import { DynamicPageComponent } from './Components/dynamic-page/dynamic-page.component';
import { EventsNewsComponent } from './Components/events-news/events-news.component';
import { IntegratedSolutionsDiscoverComponent } from './Components/integrated-solutions-discover/integrated-solutions-discover.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { BlogsDetailsComponent } from './Components/blogs-details/blogs-details.component';
import { FoodsafetyDiplomaComponent } from './Components/foodsafety-diploma/foodsafety-diploma.component';
import { IpmDiplomaComponent } from './Components/ipm-diploma/ipm-diploma.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: '', component: LayoutComponent,children:[
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'vision-mission-values', component: VisionMissionValuesComponent},
    {path: 'our-code-of-conduct', component: CodeOfConductsComponent},
    {path: 'about-team', component: AboutTeamComponent},
    { path: 'Integrated-Solutions/:id', component: DynamicPageComponent },
    { path: 'events-news', component: EventsNewsComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'blogsDetails/:id/:name', component: BlogsDetailsComponent },
    { path: 'Integrated-Solutions-Tree', component: IntegratedSolutionsDiscoverComponent },
    { path: 'IPM-Diploma', component: IpmDiplomaComponent },
    { path: 'Food-Safety-Diploma', component: FoodsafetyDiplomaComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
