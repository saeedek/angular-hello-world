import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector : 'courses',
    template : `
        <input #email (keyup.enter)="onKeyUp(email.value)" />
        
        <button (click)="onSave($event)" class="btn btn-primary">Save</button>    
    `
})
//<input (keyup.enter)="onKeyUp($event)" /> //bad way to get the value of the field
//<button class="btn btn-primary" [class.active]="isActive">Save</button>  to add or remove a class
//<button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>  //style binding
//<button class="btn btn-primary" [attr.colspan]="2">Save</button>  //to bind attributes that are not in the dom
//<input (keyup)="onKeyUp($event)" />
export class CoursesComponent{
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200"  
    isActive = true;  
    onSave($event){
        $event.stopPropagation(); //to stop the event to bubble up
        console.log("button was clicked", $event);
    }
    onKeyUp(email){
        // if($event.keyCode === 13){
        //     console.log("Enter was pressed")
        // }
        console.log("the email is "+ email)

    }
}