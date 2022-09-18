import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IUser } from '../app.component'
export interface Grade {
  math: number
  rus: number
}
@Component({
  selector: 'inst-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component {
  @Input() text2?: string
  @Input() user?: IUser
  @Output() SendingGrade = new EventEmitter()

  sendGrade() {
    const math = 5
    const rus = 4
    this.SendingGrade.emit({ math, rus })
  }
}
