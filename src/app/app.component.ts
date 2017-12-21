import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  favoriteThing: string;
  thingClicked: string;
  thingAdded: string;
  selectedThing: string;

  favoriteThingsArray = ['Backpacking', 'Beers', 'Brats', 'Your Mom'];

  clickedThing(thingClicked): void {
    console.log('Clicked Thing: ' + thingClicked);
    this.selectedThing = thingClicked;
  }

  addFavoriteThing(thingAdded) {
    console.log('Thing Added: ' + thingAdded);
    this.favoriteThingsArray.push(thingAdded);
    return false;
  }

}
