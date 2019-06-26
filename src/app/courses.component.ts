import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector : 'courses',
    template : `
        <button class="btn btn-primary">Save</button>    
    `
})
export class CoursesComponent{
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200"    
}