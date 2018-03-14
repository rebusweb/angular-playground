import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter: number = 1;
  counterChange(counter: number) {
    this.counter = counter;
    console.log('update', counter);
  }
}
