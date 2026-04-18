import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { VideogameService } from '../../../shared/services/videogame.service';
import { ActivatedRoute } from '@angular/router';
import { GameDetail } from '../../../shared/interfaces/game-detail.interface';
import { Loader } from '../../../core/components/loader/loader';

@Component({
  selector: 'app-games-detail',
  imports: [Loader],
  templateUrl: './games-detail.html',
  styleUrl: './games-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesDetail implements OnInit {
  private readonly videoGamesService = inject(VideogameService);
  private readonly activatedRoute = inject(ActivatedRoute);
  public id!: string;
  public game = signal<GameDetail | null>(null);
  public isLoading = signal<boolean>(true);

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.id = id;
        this.videoGamesService.gameDetails(id).subscribe({
          next: (data) => {
            this.game.set(data);
          },
          error: () => {},
          complete: () => {
            this.isLoading.set(false);
          }
        })
      }
    });
  }
}
