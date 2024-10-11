import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movies } from '../_models/movies';
import { MoviesService } from '../_services/movies.service';
import { Router } from '@angular/router';
import { ActionsService } from '../_services/actions.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  ns: string = '';
  ndc: string = '';
  data: any;

  constructor(private actionsService: ActionsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.actionsService.getActionData(this.ns, this.ndc).subscribe(
      data => {
        console.log('Received data:', data);
        this.data = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

}


// @Output() addMovie = new EventEmitter<Movies>();
// model: any = {}
// showForm = false;

// constructor(private moviesService: MoviesService, private router: Router) { }

// ngOnInit(): void {
// }

// onAddMovie() {
//   const newMovie: Movies = {
//     title: this.model.title,
//     rating: this.model.rating
    
//   };
//   console.log(this.model.title)
//   this.moviesService.addMovie(newMovie);
//   this.router.navigate(['/main']);
  // this.addMovie.emit(newMovie);
  // this.model.title = '';
  // this.model.rating = 0;
 
//}