import { Component, OnInit, Input, SimpleChange, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {
@Input() childData;
@Output() childDataOut = new EventEmitter();
ngOnchanges(changes: SimpleChange){
  this.childData = changes[this.childData].currentValue;
}
  constructor() { }

  ngOnInit() {
  }
  changeParentData(){
  this.childDataOut.emit("data changed from child")}

}
