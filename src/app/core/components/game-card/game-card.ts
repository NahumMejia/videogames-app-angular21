import { Component, inject, input } from '@angular/core';
import { AngularMaterialModule } from '../../../shared/Modules/angular-material-module';
import { Game } from '../../../shared/interfaces/games-list.interface';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-game-card',
  imports: [AngularMaterialModule, RouterLink],
  templateUrl: './game-card.html',
  styleUrl: './game-card.scss',
})
export class GameCard {
  public router = inject(Router);
  public game = input.required<Game>();
}
