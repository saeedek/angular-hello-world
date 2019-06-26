import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector : 'courses',
    template : `
        <button (click)="onSave($event)" class="btn btn-primary">Save</button>    
    `
})
//<button class="btn btn-primary" [class.active]="isActive">Save</button>  to add or remove a class
//<button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>  //style binding
//<button class="btn btn-primary" [attr.colspan]="2">Save</button>  //to bind attributes that are not in the dom
export class CoursesComponent{
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200"  
    isActive = true;  
    onSave($event){
        console.log("button was clicked", $event);
    }
}