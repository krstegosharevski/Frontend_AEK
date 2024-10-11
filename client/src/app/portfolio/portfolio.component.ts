import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../_models/user';
import { Movies } from '../_models/movies';
import { MoviesService } from '../_services/movies.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  @Input() users : User[] = []
  @Output() moviesEvent = new EventEmitter<Movies[]>();

  movies : Movies[] = [];
  curr_state : boolean = false;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    // this.movies.push(
    //   {rating : 8.6, title:"Dune"},
    //   {rating : 8.3, title:"Oppenheimer"},
    //   {rating : 8.8, title:"Fight Club"}
    // )
    this.moviesService.movies$.subscribe(
      movies => {
        this.movies = movies;
      }
    )
  }

  onAddMovie(movie: Movies) {
    this.movies.push(movie);
  }

  sendMovies(){
    this.moviesEvent.emit(this.movies);
    this.curr_state = true
  }

}
