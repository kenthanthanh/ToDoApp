import { Component , EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../../Todo'
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
constructor(public dataService: DataService){}



}


