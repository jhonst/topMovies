import { Component, OnInit } from '@angular/core';
import { MoviesModel } from 'src/app/interfaces/movies-model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  allMovies : MoviesModel[] | undefined;
  changeText : boolean = false;

  constructor(private serviceMovies : MoviesService) { }

  ngOnInit(): void {

    //TODO: fix deprecated issue
    this.serviceMovies.getMovies("popular").subscribe((resp)=>{
      this.allMovies = resp.results;
    },(err)=>{
      console.log(err);
    });
  }

  showMovies():void{
    if(this.allMovies){
      console.log(this.allMovies[0].title);
    }
    
  }

}
