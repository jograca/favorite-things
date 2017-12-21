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

  favoriteThingsArray = [
    {id: 1, name: 'Backpacking'},
    {id: 2, name: 'Beers'},
    {id: 3, name: 'Brats'},
    {id: 4, name: 'Your Mom'}];

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
