import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite-star',
  templateUrl: './favorite-star.component.html',
  styleUrls: ['./favorite-star.component.css']
})
export class FavoriteStarComponent implements OnInit {
  isFavorite = false;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isFavorite = !this.isFavorite;
  }

}
