import { Component, inject, OnInit } from '@angular/core';
import { VideogameService } from '../../../shared/services/videogame.service';
import { ActivatedRoute } from '@angular/router';
import { GameDetail } from '../../../shared/interfaces/game-detail.interface';

@Component({
  selector: 'app-games-detail',
  imports: [],
  templateUrl: './games-detail.html',
  styleUrl: './games-detail.scss',
})
export class GamesDetail implements OnInit {
  private readonly videoGamesService = inject(VideogameService);
  private readonly activatedRoute = inject(ActivatedRoute);
  public id!: string;
  public game?:GameDetail;

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.id = id;
        
        this.videoGamesService.gameDetails(id).subscribe((data) => {
          this.game = data;
        });
      }
    });
  }
}
