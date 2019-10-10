import { Component, OnInit } from '@angular/core';
import { SharedDataService, ToDoItem } from 'src/app/services/shared-data.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    newItem = new ToDoItem('', '');
    todoList: ToDoItem[] = [];
    constructor(public dataService: SharedDataService) {}

    ngOnInit() {
        this.todoList = this.dataService.getToDoList();
    }

    addNewItem() {
        const item = Object.assign({}, this.newItem);
        this.dataService.addToDoItem(item);
        this.newItem = new ToDoItem('', '');
    }
}
