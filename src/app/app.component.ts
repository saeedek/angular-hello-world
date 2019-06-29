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
  //courses = [1,2];
  //
  viewMode = 'map';
  //
  courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
  ]
  onAdd(){
    this.courses.push({id: 4, name:"course4"})
  }
  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }
  onChange(course){
    course.name = "NEW NAME";
  }
  //
  people;
  loadData(){
    this.people = [
      {id: 1, name:"Saeed"},
      {id: 2, name:"Ali"},
      {id: 3, name:"Mehdi"}
    ]
  }
  trackCourse(index,person){
    return person ? person.id : undefined;
  }
}

