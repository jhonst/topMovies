export interface MoviesModel {

    id:number;
    genre_ids: number[];

    //Images
    backdrop_path: string;
    poster_path: string;
    
    //titles
    original_title:string;
    title: string;

    original_language:string;
    
    overview:string;

    vote_average: number;
    release_date: string;
}
