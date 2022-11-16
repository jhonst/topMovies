import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../interfaces/response-model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  listMovies:any;

  constructor(private http : HttpClient) {}

  /*
  getMovies2():void{
    this.listMovies = ["El amanecer de los muertos", "masacre en texas", "Corazones de acero"];
    this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=c289a42451156d66de80eb725e98919b&language=en-US").subscribe((data)=>{
      this.listMovies = data;
    });
  }
  */

  getMovies(typeList:string):Observable<ResponseModel>{
    return this.http.get(`https://api.themoviedb.org/3/movie/${typeList}?api_key=c289a42451156d66de80eb725e98919b&language=en-US`);
  }


}
