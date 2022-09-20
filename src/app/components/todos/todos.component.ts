import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface Todos {
  addedDate: string
  id: string
  order: number
  title: string
}

export interface BaseResponse<T = {}> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}
@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private http: HttpClient) {}
  todos: Todos[] = []
  httpOptions = {
    withCredentials: true,
    headers: { 'API-KEY': 'bd4ae310-899e-41ab-b129-c57668c4e43e' },
  }
  ngOnInit(): void {
    this.getTodos()
  }
  getTodos() {
    this.http
      .get<Todos[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.httpOptions)
      .subscribe(res => {
        this.todos = res
      })
  }
  createTodo() {
    let random = Math.floor(Math.random() * 100)
    let title = 'New ' + random
    this.http
      .post<BaseResponse<{ item: string }>>(
        'https://social-network.samuraijs.com/api/1.1/todo-lists',
        { title: title },
        this.httpOptions
      )
      .subscribe(() => {
        // const newTodo = res.data.item
        // this.todos.unshift(newTodo)
        this.getTodos()
      })
  }
  deleteTodo(todoId: string) {
    this.http
      .delete<BaseResponse>(
        `https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`,
        this.httpOptions
      )
      .subscribe(() => {
        // this.getTodos()
        this.todos = this.todos.filter(el => el.id !== todoId)
      })
  }
}
