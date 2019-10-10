import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoItem } from 'src/app/services/shared-data.service';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
    @Input() toDoItem: ToDoItem;

    constructor() {}

    ngOnInit() {}
}
