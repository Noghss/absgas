import { environment } from '../../../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'abs-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  displayMenuMobile = false;

  constructor() {}

  /**
   * Toogles the mobile menu.
   *
   * @returns void
   */
  toggleMenu(): void {
    this.displayMenuMobile = !this.displayMenuMobile;
  }
}
