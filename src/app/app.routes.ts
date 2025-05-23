import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { AddbookComponent } from './components/addbook/addbook.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'home page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'book details'
    },
    {
        path: 'addbook',
        component: AddbookComponent,
        title: 'add book'
    }
];
