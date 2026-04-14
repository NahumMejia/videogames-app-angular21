import { Routes } from '@angular/router';
import { GamesList } from './features/games/games-list/games-list';
import { Home } from './features/home/home';

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
        path: '',
        component: Home
    }

];
