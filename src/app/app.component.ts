import { Component, OnInit } from '@angular/core'
import { ValueService } from '../services/ValueService'
import { Observable } from 'rxjs'
import { AmazingLoggerService } from '../services/amazing-logger.service'

export interface IUser {
  age: number
  name: string
}
interface Grades {
  id: number
  grade: number
}
interface Lessons {
  id: number
  title: string
  grades: Grades[]
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  appTitle = 'Instagram'
  math = 0
  rus = 0
  user: IUser = {
    age: 32,
    name: 'Alex',
  }
  users = ['Alex: 1', 'Bob:2']
  isAppLoading = true
  text = ''
  text2 = 'simple text'
  text3 = ''
  lessons: Lessons[] = [
    {
      id: 1,
      title: 'Math',
      grades: [
        { id: 1, grade: 5 },
        { id: 2, grade: 3 },
        { id: 3, grade: 4 },
      ],
    },
    {
      id: 2,
      title: 'Rus',
      grades: [
        { id: 1, grade: 2 },
        { id: 2, grade: 2 },
        { id: 3, grade: 2 },
      ],
    },
  ]
  isLoading: boolean = true
  value$ = new Observable()
  constructor(
    private valueService: ValueService,
    private amazingLoggerService: AmazingLoggerService
  ) {
    setTimeout(() => {
      this.isAppLoading = false
      this.isLoading = false
    }, 2000)
  }

  changeTitleHandler() {
    this.appTitle = 'Instagram2'
  }

  changeTextHandler(event: Event) {
    this.text = (event.currentTarget as HTMLInputElement).value
  }

  getGrade(value: any) {
    this.math = value.math
    this.rus = value.rus
  }

  addItem() {
    this.users.push(this.text3)
  }

  ngOnInit(): void {
    this.value$ = this.valueService.value$
  }

  decHandler() {
    this.valueService.dec()
    this.amazingLoggerService.log('remove 1', 'info')
  }
}
