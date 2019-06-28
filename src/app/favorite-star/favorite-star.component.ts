import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite-star',
  templateUrl: './favorite-star.component.html',
  styleUrls: ['./favorite-star.component.css']
  //inputs: ["isFavorite"] bad way to make input properties.
})
export class FavoriteStarComponent implements OnInit {
  @Input() isFavorite: boolean;
  //Input() isFavorite = false; one way to declare input
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isFavorite = !this.isFavorite;
  }

}
