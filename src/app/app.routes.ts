import { Routes } from '@angular/router';
import { GamesList } from './features/games/games-list/games-list';

export const routes: Routes = [
    {
        path: 'games',
        component: GamesList,
    }

];
