import { Component, inject, OnInit } from '@angular/core';
import { VideogameService } from '../../../shared/services/videogame.service';
import { Game, GameList } from '../../../shared/interfaces/games.interface';
import { GameCard } from "../../../core/components/game-card/game-card";

@Component({
  selector: 'app-games-list',
  imports: [GameCard],
  templateUrl: './games-list.html',
  styleUrl: './games-list.scss',
})
export class GamesList implements OnInit {
  private readonly gamesService = inject(VideogameService);

  public games: Game[] = [];
  public totalGames: number = 0;
  public nextPage: string | null = null;

  ngOnInit(): void {
    this.gamesService.getGames().subscribe((response: GameList)=> {
      this.games = response.results;
      this.totalGames = response.count;
      this.nextPage = response.next;
    })
  }
}
