import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private  http: HttpClient) {

   }
   getQuery(query:any){
     const url = `https://api.themoviedb.org/${query}?api_key=2fa65f5723aae07b04e1fff6c02c71a4`;
    //  const headers = new HttpHeaders({
    //    'api_key': '2fa65f5723aae07b04e1fff6c02c71a4'
    //  })
     return this.http.get(url);
   }

   getPopularMovies(){
     return this.getQuery('3/movie/popular')
                .pipe(map(data=>data['results']))
   }
}
