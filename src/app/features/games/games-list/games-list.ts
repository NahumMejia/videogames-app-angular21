import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { VideogameService } from '../../../shared/services/videogame.service';
import { Game, GameList } from '../../../shared/interfaces/games.interface';
import { GameCard } from "../../../core/components/game-card/game-card";
import { Loader } from "../../../core/components/loader/loader";

@Component({
  selector: 'app-games-list',
  imports: [GameCard, Loader],
  templateUrl: './games-list.html',
  styleUrl: './games-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesList implements OnInit {
  private readonly gamesService = inject(VideogameService);

  public games = signal<Game[]>([]);
  public totalGames = signal<number>(0);
  public nextPage = signal<string | null>(null);
  public isLoading = signal<boolean>(false);

  ngOnInit(): void {
    this.isLoading.set(true);
    this.gamesService.getGames().subscribe((response: GameList) => {
      this.games.set(response.results);
      this.totalGames.set(response.count);
      this.nextPage.set(response.next);
      this.isLoading.set(false);
    });
  }
}
