import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is the naapey ';
  name  = 'raghab';  
  students:any[] = [
    {
      id : '1',
      name : "raghav",
      age: 28,
      address :"calicut"
    }
    ,
    {
      id : '2',
      name : "raghav",
      age: 28,
      address :"calicut"
    },

    {
      id : '3',
      name : "raghav",
      age: 28,
      address :"calicut"
    },

    {
      id : '4',
      name : "raghav",
      age: 28,
      address :"calicut"
    }
  ]

}
