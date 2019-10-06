import { Component} from '@angular/core';
import { MoviesService } from '../../service/movies-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent  {
  movie: any = {};
  cast: any = {};
  director: any = {};
  constructor(private router: ActivatedRoute,
              private movieService: MoviesService) {
    this.router.params.subscribe( params=>{
      this.getMovieId(params['id']);
    } )

 }

  getMovieId(id:string){
    this.movieService.getMovie(id)
        .subscribe(movie=>{
          console.log(movie)
          this.movie = movie;
        })
    this.movieService.getCast(id)
        .subscribe(cast=>{
          console.log(cast)
          this.cast = cast;
          //this.director = cast.crew.filter(_=>_.department === "Directing")
          //console.log(this.director)
        })
  }

}
