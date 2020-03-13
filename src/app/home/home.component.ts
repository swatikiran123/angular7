import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todaydate;
  public persondata = [];
  constructor(private service : MyserviceService) {

   }

  ngOnInit() {
    this.todaydate= this.service.showTodayDate();
    this.service.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.persondata);
   });
  }
  title = 'Angular 7 Project!'; 
  // todaydate = new Date(); 
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}}; 
  
  // declared array of months.
  months = ["January", "Feburary", "March", "April", "May","June", "July", 
  "August", "September", "October", "November", "December"];

  //variable is set to true
  ifElseisavailable = false; 

 //variable is set to true
 ifThenElseisavailable = true; 

 myClickFunction(event) {
  //just added console.log which will display the event 
  // details in browser on click of the button.
  alert("Button is clicked");
  console.log(event);
}
changemonths(event) {
  console.log("Changed month from the Dropdown");
  console.log(event);
}
}
