import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: '', component: LayoutComponent,children:[
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contact-us', component: ContactUsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
