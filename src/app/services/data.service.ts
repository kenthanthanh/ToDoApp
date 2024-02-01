import { Injectable, SimpleChanges } from '@angular/core';
import { Todo } from '../Todo';
import { BehaviorSubject } from 'rxjs';
interface Filter {
  all: (todos: Todo[]) => Todo[]; // Return an array of filtered todos
  active: (todo: Todo) => boolean; // Return a boolean for filtering
  completed: (todo: Todo) => boolean; // Return a boolean for filtering
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  fav = [];
  todos: Todo[] = [];
  newTodo: string = ' ';
  remaining: number = this.todos.filter((todo) => !todo.isCompleted).length;
  filterType: any = 'all'
  filters: any = {
    all: (todos: Todo[]) => todos, // Return all todos
    active: (todo: Todo) => !todo.isCompleted, // Filter for active todos
    completed: (todo: Todo) => todo.isCompleted, // Filter for completed todos
  };
  keys : string[] = Object.keys(this.filters);
  currentTodos() {
    return this.todos.filter(this.filters[this.filterType])
  }
  
  switchFilter(filter: string){
    return this.filterType= filter

  }
 
  addTodo(newTodo: string) {
    const value = newTodo.trim();
    if (value) {
      this.todos.push({ name: value, isCompleted: false });
    }
    this.newTodo = '';
    this.updateRemaining();
    
  }

  removeTodo(todo: Todo): void {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.updateRemaining();
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(this.filters.active);
  }

  completedTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.todos[i].isCompleted = !this.todos[i].isCompleted;
    this.updateRemaining();
  }

  updateRemaining(): void {
   this.remaining = this.todos.filter((todo) => !todo.isCompleted).length;
  }

  toggleAll() :void{
   
    this.currentTodos().forEach((todo) =>  (todo.isCompleted = !todo.isCompleted));
this.updateRemaining()
   
  }
 
  // updateFav(){
  //   this.fav = JSON.parse(localStorage.getItem('favorite'));
  // }
}
