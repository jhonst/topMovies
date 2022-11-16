import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  idMovie : number = 0;

  constructor(private routes : ActivatedRoute) { }

  ngOnInit(): void {


    //this.idMovie = this.routes.snapshot.params?.['id'];

    
    this.routes.params.subscribe((resp : Params)=>{
      this.idMovie = resp?.['id'];
    });
    

  }

}
