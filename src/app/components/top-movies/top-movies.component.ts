import { Component, OnInit } from '@angular/core';
import { MoviesModel } from 'src/app/interfaces/movies-model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit {

  topMovies : MoviesModel[] | undefined;

  constructor(private serviceMovie : MoviesService) { }

  ngOnInit(): void {

    this.serviceMovie.getMovies("popular").subscribe(
      (resp)=>{
        this.topMovies = (resp.results)?.filter((element,index)=>index<5);
      },
      (err)=>{

      }
    );

  }

}
