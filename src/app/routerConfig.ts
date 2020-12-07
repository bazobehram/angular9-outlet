import { Routes } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { AppComponent } from './app.component';
import { SecondComponent } from './pages/first/second/second.component';

export const appRoutes: Routes = [
    {path: '', component: SecondComponent},
    { path: 'first', 
    component: FirstComponent , pathMatch: 'full',
  },
 
];


