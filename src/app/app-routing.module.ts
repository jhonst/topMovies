import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RandomMovieComponent } from './pages/random-movie/random-movie.component';

const routes: Routes = [
  { path : "", component : HomeComponent },
  { path : "home", component : HomeComponent },
  { path : "randomMovie/:id", component : RandomMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
