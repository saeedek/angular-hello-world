import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        {{course.title | uppercase | lowercase}} <br />
        {{course.students | number}} <br />
        {{course.rating | number:'1.2-2'}} <br />
        {{course.price | currency:'AUD':'code':'3.2-2'}} <br />
        {{course.releaseDate | date:'shortDate'}}
    `
})
//decimal =>   number:'1(number of integer digits).1-1(min-max number of digits after the decimal.1-1 rounds it'
// `
//         <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        
//         <button (click)="onSave($event)" class="btn btn-primary">Save</button>    
//     `
//<input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" /> bad way for 2-way binding
//<input #email (keyup.enter)="onKeyUp(email.value)" /> template variables
//<input (keyup.enter)="onKeyUp($event)" /> //bad way to get the value of the field
//<button class="btn btn-primary" [class.active]="isActive">Save</button>  to add or remove a class
//<button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>  //style binding
//<button class="btn btn-primary" [attr.colspan]="2">Save</button>  //to bind attributes that are not in the dom
//<input (keyup)="onKeyUp($event)" />
export class CoursesComponent {
    course = {
        title : "The complete Angular Course",
        rating : 4.9745,
        students: 30123,
        price : 190.95,
        releaseDate : new Date(2016,3,1)
    }















    // email = "Hello";
    // title = "List of courses";
    // imageUrl = "http://lorempixel.com/400/200"  
    // isActive = true;  
    // onSave($event){
    //     $event.stopPropagation(); //to stop the event to bubble up
    //     console.log("button was clicked", $event);
    // }
    // onKeyUp(){
    //     // if($event.keyCode === 13){
    //     //     console.log("Enter was pressed")
    //     // }
    //     console.log("the email is "+ this.email)

    // }
    // // onKeyUp(email){
    // //     // if($event.keyCode === 13){
    // //     //     console.log("Enter was pressed")
    // //     // }
    // //     console.log("the email is "+ email)

    // // }
}