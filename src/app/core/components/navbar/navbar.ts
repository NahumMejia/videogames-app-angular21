import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../../shared/Modules/angular-material-module';
import { RouterLink } from "@angular/router";

interface menuItems {
  label: string
  url: string
}

@Component({
  selector: 'app-navbar',
  imports: [AngularMaterialModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  public navBarItems:menuItems[] = [
    {
      label: 'Home',
      url: '/home'
    },
    {
      label: 'Games',
      url: '/games'
    }
  ]
}
