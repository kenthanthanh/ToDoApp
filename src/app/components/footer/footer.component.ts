import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
  , inputs :['remaining', 'todos', 'clearSelected']
})
export class FooterComponent {
  @Input() todos: Todo[] = [];

  @Input() remaining !: number;
  @Input() clearCompleted: any;

  @Output() todosChange = new EventEmitter();


  ngOnInit() {
    
  }
  sendTodos(){
    this.todosChange.emit(this.todos);
  }

  constructor(public dataService: DataService){}

  // constructor(public dataService: DataService){}

}

