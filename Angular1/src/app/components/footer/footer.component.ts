import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  template: `
  <div>{{ currentTime | clock }}</div>
`
})
export class FooterComponent {
  currentTime: number;

  constructor() {
    this.currentTime = Date.now();
    setInterval(() => {
      this.currentTime = Date.now();
    }, 1000);
  }

}
