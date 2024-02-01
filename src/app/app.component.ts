import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  computed,
} from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnChanges {
  constructor(public dataService: DataService){}
  ngOnInit(): void {    
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  

 
}
