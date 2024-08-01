import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-carousel',
  templateUrl: './buy-carousel.component.html',
  styleUrls: ['./buy-carousel.component.css']
})
export class BuyCarouselComponent {
  isVisible: boolean = true;
  selectedEdition: string

  constructor(private router: Router) {}

  onButtonClick(edition: string) {
    this.selectedEdition = edition;
    this.router.navigate(['/purchase'], { queryParams: { edition: this.selectedEdition } });
  }
}
