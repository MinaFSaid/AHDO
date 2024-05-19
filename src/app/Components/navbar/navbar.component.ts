import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GetRequestsService } from './../services/get-requests.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  activeDropdown: { [key: number]: boolean } = {};
  
  isAboutUsOpen = false;
  isIntegratedSolutionsOpen = false;
  menu:any = [];
  sub:any = false;
  constructor(private _GetRequestsService:GetRequestsService,private route: ActivatedRoute){

  }
  toggleDropdowns(menuId: number): void {
    if (this.activeDropdown[menuId]) {
      this.activeDropdown[menuId] = false;
    } else {
      // Optionally close other dropdowns
      Object.keys(this.activeDropdown).forEach((key:any) => {
        this.activeDropdown[key] = false;
      });
      this.activeDropdown[menuId] = true;
    }
  }
  ngOnInit(): void {
    this._GetRequestsService.getMenus().subscribe((data)=>{
      this.menu = data.result
      this.sub = true;
    })
  }

  @Input() menus: any;


  toggleDropdown(dropdown: string) {
    if (dropdown === 'aboutUs') {
      this.isAboutUsOpen = !this.isAboutUsOpen;
      this.isIntegratedSolutionsOpen = false; // Close the other dropdown
    } else if (dropdown === 'integratedSolutions') {
      this.isIntegratedSolutionsOpen = !this.isIntegratedSolutionsOpen;
      this.isAboutUsOpen = false; // Close the other dropdown
    }
  }

  leaveMegaDiv(){
    this.isAboutUsOpen = false;
    this.isIntegratedSolutionsOpen = false;
  }

}
