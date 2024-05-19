import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GetRequestsService } from '../services/get-requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,             // Enable autoplay
    autoplaySpeed: 1000,        // Speed of autoplay transitions in milliseconds
    navSpeed: 400,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    // nav: true
  };
  customOptionsCard: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,             // Enable autoplay
    autoplaySpeed: 1000,        // Speed of autoplay transitions in milliseconds
    navSpeed: 400,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    // nav: true
  };

  menu: any = [];
  sub: any = false;
  childPagesOfFoodSafety: any[] = [];

  constructor(private _GetRequestsService: GetRequestsService) {
    this._GetRequestsService.getMenus().subscribe((data) => {
      this.menu = data.result
      this.sub = true;
      this.setChildPagesOfFoodSafety();
    })
  }

  setChildPagesOfFoodSafety(): void {
    const foodSafetyMenu = this.menu.find((item: any) => item.name === 'Food Safety and Hygiene');
    if (foodSafetyMenu) {
      this.childPagesOfFoodSafety = foodSafetyMenu.childPages;
    }
  }

}
