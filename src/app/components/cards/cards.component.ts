import { Component, Input } from '@angular/core';
import { Router,  RouterModule  } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent  {
  @Input() items: any[] = [];
  constructor( private router: Router) { }

  seeMovie(item:any){
    let movieId = item.id;
    this.router.navigate(['/movie', movieId])

  }
 

}
