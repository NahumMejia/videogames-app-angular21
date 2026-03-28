
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/dev.environment';
import { Observable } from 'rxjs';
import { GameList } from '../interfaces/games.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideogameService {
  private readonly BASE_URL: string = environment.BASE_URL;
  private readonly API_KEY: string = environment.API_KEY;
  private readonly http = inject(HttpClient);

  public getGames(): Observable<GameList> {
    const url = this.BASE_URL + '/games' + `?key=${this.API_KEY}`;
    return this.http.get<GameList>(url);
  }
}
