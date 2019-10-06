import { Component} from '@angular/core';
import { MoviesService} from '../../service/movies-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  popularMovies: any[] = []
  constructor( private movies: MoviesService) {
   
    this.movies.getPopularMovies()
        .subscribe((data:any)=>{
          console.log(data)
          this.popularMovies = data
        })

   }
 

}
