import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GetRequestsService } from './../services/get-requests.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  isAboutUsOpen = false;
  isIntegratedSolutionsOpen = false;
  menu:any = [];
sub:any = false;
  constructor(private _GetRequestsService:GetRequestsService,private route: ActivatedRoute){

  }
  
  ngOnInit(): void {
    this._GetRequestsService.getMenus().subscribe((data)=>{
      this.menu = data.result
      this.sub = true;
    })
  }

  @Input() menus: any;

  RoutingTo(id:any){
    // console.log(id)
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
