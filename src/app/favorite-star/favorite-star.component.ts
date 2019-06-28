import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite-star',
  templateUrl: './favorite-star.component.html',
  styleUrls: ['./favorite-star.component.css'],
  encapsulation : ViewEncapsulation.ShadowDom
  //inputs: ["isFavorite"] bad way to make input properties.
})
export class FavoriteStarComponent{
  @Input('is-favorite') isFavorite: boolean; //gave it a nickname so it doesn't break the contract in this com's html and other consumers
  @Output('change') change =new EventEmitter();
  
  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue : this.isFavorite});
  }

}
export interface FavoriteChangedEventArgs{
  newValue : boolean
}
