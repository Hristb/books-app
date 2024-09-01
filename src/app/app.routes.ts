import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'Home'
    },
    {
        path: 'Home',
        pathMatch:'full',
        loadComponent:() => import('./public/home/home.component').then((m)=> m.HomeComponent),
    }
];
