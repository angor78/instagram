import { Component, OnInit } from '@angular/core'
import { ValueService } from '../../services/ValueService'

@Component({
  selector: 'inst-test7',
  template: `
    <!--    <h1 class="title1">test7</h1>-->
    <!--    <h2 class="title2">test777</h2>-->
    <h1 class="title1">service test 7</h1>
    <h1 class="title2">{{ value }}</h1>
    <button (click)="addHandler()">+</button>
  `,
  styles: [
    `
      .title1 {
        color: green;
      }

      .title2 {
        color: blue;
      }
    `,
  ],
})
export class Test7Component implements OnInit {
  value = 0
  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    this.value = this.valueService.value
  }
  addHandler() {
    this.valueService.add()
  }
}
