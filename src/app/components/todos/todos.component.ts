import { Component, OnInit } from '@angular/core'
import { Todos, TodosService } from '../../../services/todos.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private todosService: TodosService) {}
  todos: Todos[] = []
  error = ''

  ngOnInit(): void {
    this.getTodos()
  }
  getTodos() {
    this.todosService.getTodos().subscribe({
      next: res => {
        this.todos = res
      },
      error: (error: HttpErrorResponse) => {
        this.error = error.message
      },
    })
  }
  createTodo() {
    let random = Math.floor(Math.random() * 100)
    let title = 'New ' + random
    this.todosService.createTodo(title).subscribe(() => {
      // const newTodo = res.data.item
      // this.todos.unshift(newTodo)
      this.getTodos()
    })
  }
  deleteTodo(todoId: string) {
    this.todosService.deleteTodo(todoId).subscribe(() => {
      this.getTodos()
      // this.todos = this.todos.filter(el => el.id !== todoId)
    })
  }
}
