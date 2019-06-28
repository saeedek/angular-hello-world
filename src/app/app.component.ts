import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite-star/favorite-star.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title : "Title",
    isFavorite : true
  }
  onFavoriteChanged(newState:FavoriteChangedEventArgs){
    console.log("Favorite changed to:",newState.newValue)
  }
  tweet={
    text : "This is a tweet",
    isLiked : false,
    likeCount : 0
  };
  courses = [];

}
