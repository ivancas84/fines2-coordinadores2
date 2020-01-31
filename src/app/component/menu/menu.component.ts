import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  public isCollapsed = true;

 toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

}
