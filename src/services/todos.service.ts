import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../environments/environment'

export interface Todos {
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
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  httpOptions = {
    withCredentials: true,
    headers: { 'API-KEY': `${environment.apiKey}` },
  }
  constructor(private http: HttpClient) {}
  getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>(`${environment.baseUrl}/todo-lists`, this.httpOptions)
  }
  createTodo(title: string): Observable<BaseResponse<{ item: string }>> {
    return this.http.post<BaseResponse<{ item: string }>>(
      `${environment.baseUrl}/todo-lists`,
      { title: title },
      this.httpOptions
    )
  }
  deleteTodo(todoId: string): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(
      `${environment.baseUrl}/todo-lists/${todoId}`,
      this.httpOptions
    )
  }
}
