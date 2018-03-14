import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-indecrement',
  templateUrl: './indecrement.component.html',
  styleUrls: ['./indecrement.component.css']
})
export class IndecrementComponent implements OnInit {

  @Input() counter : number = 0;
  @Output('update') change : EventEmitter<number> = new EventEmitter<number>();
 
  constructor() { }

  ngOnInit() {
  }

  increment() : void {
    this.counter ++;
    this.change.emit(this.counter);
    console.log('change', this.counter);
  }

  decrement() : void {
    this.counter --;
    this.change.emit(this.counter);
    console.log('change', this.counter);
  }

}
