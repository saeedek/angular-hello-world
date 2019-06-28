import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite-star',
  templateUrl: './favorite-star.component.html',
  styleUrls: ['./favorite-star.component.css']
  //inputs: ["isFavorite"] bad way to make input properties.
})
export class FavoriteStarComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean; //gave it a nickname so it doesn't break the contract in this com's html and other consumers
  //Input() isFavorite = false; one way to declare input
  @Output() change =new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }

}
