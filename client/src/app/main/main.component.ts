import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Movies } from '../_models/movies';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users : User[] = [];
  movies : Movies[] = [];

  constructor() { }

  ngOnInit(): void {
    this.users.push(
      { id: 1, username: 'John Doe', gender: 'male' },
      { id: 2, username: 'Jane Smith', gender: 'female' },
      { id: 3, username: 'Alice Johnson', gender: 'female' }
    );
  }

  handleMoviesEvent(movies: Movies[]) {
    this.movies = movies; // Примање на податоците од детската компонента
  }

}
