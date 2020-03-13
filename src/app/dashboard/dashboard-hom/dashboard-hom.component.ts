import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dashboard-hom',
  templateUrl: './dashboard-hom.component.html',
  styleUrls: ['./dashboard-hom.component.css']
})
export class DashboardHomComponent implements OnInit {
  fixedSizeData;
  list=["a","b","c","d",];
  formdata;
  constructor() { }

  ngOnInit() {
  this.fixedSizeData = Array(10000).fill(30);
  console.log(this.fixedSizeData);

  //  Model driven form getting initialized 
  this.formdata = new FormGroup({ 
    emailid: new FormControl("angular@gmail.com"),
    passwd: new FormControl("abcd1234") 
 });

  }
   

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

 onClickSubmit(data) {
      alert("Entered Email id : " + data.emailid); 
   }
}
