import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-description',
  template: `
  <div class="home">
      <h1>{{title}}</h1>
      <p>{{description}}</p>
  </div>
  `
})
export class DescriptionComponent {
    readonly title = 'Dog breed database';
    readonly description = 'Venture into the fascinating world of dog breeds. Discover their unique charasterictics, origins and care needs in our comprehensive guide. Whether a seasoned dog lover or in search of our perfect furry friend - find all the answers here!';
}

