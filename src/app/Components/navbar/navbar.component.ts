import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isAboutUsOpen = false;
  isIntegratedSolutionsOpen = false;

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
