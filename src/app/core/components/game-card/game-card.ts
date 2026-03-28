import { Component, input } from '@angular/core';
import { AngularMaterialModule } from '../../../shared/Modules/angular-material-module';
import { Game } from '../../../shared/interfaces/games.interface';

@Component({
  selector: 'app-game-card',
  imports: [AngularMaterialModule],
  templateUrl: './game-card.html',
  styleUrl: './game-card.scss',
})
export class GameCard {

  public game = input.required<Game>();

}
