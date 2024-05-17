import { Component, Input } from '@angular/core';
import { GetRequestsService } from './../services/get-requests.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  isAboutUsOpen = false;
  isIntegratedSolutionsOpen = false;
  menu:any = [];

  constructor(private _GetRequestsService:GetRequestsService){
    this._GetRequestsService.getMenus().subscribe((data)=>{
      // console.log(data.result);
      this.menu = data.result
    })
  }

  @Input() menus: any;

  RoutingTo(id:any){
    console.log(id)
  }

  getDropdownId(menuId: number): string {
    return `dropdown-${menuId}`;
  }

  getButtonId(menuId: number): string {
    return `button-${menuId}`;
  }

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

  pageDetails(id:any){
    console.log(id);
  }
}
