import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { VisionMissionValuesComponent } from './Components/vision-mission-values/vision-mission-values.component';
import { CodeOfConductsComponent } from './Components/code-of-conducts/code-of-conducts.component';
import { AboutTeamComponent } from './Components/about-team/about-team.component';
import { DynamicPageComponent } from './Components/dynamic-page/dynamic-page.component';
import { EventsNewsComponent } from './Components/events-news/events-news.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactUsComponent,
    HomeComponent,
    LayoutComponent,
    AboutUsComponent,
    VisionMissionValuesComponent,
    CodeOfConductsComponent,
    AboutTeamComponent,
    DynamicPageComponent,
    EventsNewsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


