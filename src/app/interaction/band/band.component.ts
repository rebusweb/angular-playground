import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {
  @Input() name : string = 'No band name given...';

  constructor() { }

  ngOnInit() {
  }

}
