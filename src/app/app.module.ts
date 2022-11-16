import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TopMoviesComponent } from './components/top-movies/top-movies.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { HomeComponent } from './pages/home/home.component';
import { RandomMovieComponent } from './pages/random-movie/random-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    CarouselComponent,
    TopMoviesComponent,
    ListMoviesComponent,
    HomeComponent,
    RandomMovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
