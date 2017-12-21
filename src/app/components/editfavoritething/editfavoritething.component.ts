import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editfavoritething',
  templateUrl: './editfavoritething.component.html',
  styleUrls: ['./editfavoritething.component.css']
})
export class EditfavoritethingComponent implements OnInit {

  @Input()
  selectedThing: object;

  constructor() { }

  ngOnInit() {
  }

}
