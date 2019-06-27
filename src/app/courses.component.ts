import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <img [src]="imageUrl" />
        <fa-icon [icon]="['far', 'star']"></fa-icon>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        <button (click)="onSave($event)" class="btn btn-primary">Save</button> <br />
        <button class="btn btn-primary" [class.active]="isActive">Class Binding</button>  <br />
        <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'white'">Style Binding</button> <br />
        <button class="btn btn-primary" [attr.colspan]="2">Attribute Binding(Not in DOM)</button> <br />
        {{course.title | uppercase | lowercase}} <br />
        {{course.students | number}} <br />
        {{course.rating | number:'1.2-2'}} <br />
        {{course.price | currency:'AUD':'code':'3.2-2'}} <br />
        {{course.releaseDate | date:'shortDate'}} <br />
        {{ text | summary:10}}
    `
})

//decimal =>   number:'1(number of integer digits).1-1(min-max number of digits after the decimal.1-1 rounds it'        
//<input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" /> bad way for 2-way binding
//<input #email (keyup.enter)="onKeyUp(email.value)" /> template variables
//<input (keyup.enter)="onKeyUp($event)" /> //bad way to get the value of the field
export class CoursesComponent {
    imageUrl = "http://lorempixel.com/400/200";
    isActive = true;
    email = "me@example.com"
    course = {
        title : "The complete Angular Course",
        rating : 4.9745,
        students: 30123,
        price : 190.95,
        releaseDate : new Date(2016,3,1)
    }
    onSave($event){
        console.log("Button was pressed");
    }
    onKeyUp(){
        console.log(this.email);
    }
    text = `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    `
















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