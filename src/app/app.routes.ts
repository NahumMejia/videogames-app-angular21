import { Routes } from '@angular/router';
import { GamesList } from './features/games/games-list/games-list';
import { Home } from './features/home/home';
import { GamesDetail } from './features/games/games-detail/games-detail';

export const routes: Routes = [
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'games',
        component: GamesList,
    },
    {
        path: 'games/:id',
        component: GamesDetail
    },
    {
        path: '',
        component: Home
    }

];
