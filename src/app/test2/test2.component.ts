import { Component } from '@angular/core'
interface Fruit {
  id: number
  name: string
  price: number
}
@Component({
  selector: 'inst-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
})
export class Test2Component {
  fruits: Fruit[] = [
    { id: 1, name: 'apples', price: 120 },
    { id: 2, name: 'punchs', price: 100 },
    { id: 3, name: 'oranges', price: 80 },
    { id: 4, name: 'kiwi', price: 180 },
    { id: 5, name: 'mango', price: 120 },
    { id: 6, name: 'banana', price: 120 },
    { id: 7, name: 'rasberryes', price: 120 },
    { id: 8, name: 'mangos', price: 120 },
  ]
  time = new Date()
}
