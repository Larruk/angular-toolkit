import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
    todoList = [
        new ToDoItem('Test Item 1', 'Test Description 1'),
        new ToDoItem('Test Item 2', 'Test Description 2'),
        new ToDoItem('Test Item 3', 'Test Description 3'),
        new ToDoItem('Test Item 4', 'Test Description 4')
    ];

    constructor() {}

    public getToDoList(): ToDoItem[] {
        return this.todoList;
    }

    public addToDoItem(item: ToDoItem) {
        this.todoList.push(item);
    }

    public removeToDoItem(item: ToDoItem) {
        const foundItemIndex = this.todoList.findIndex(i => item === i);
        if (foundItemIndex > 0) {
            this.todoList = this.todoList.splice(foundItemIndex, 1);
        }
    }
}

export class ToDoItem {
  constructor(
    public title: string,
    public description: string,
    public isDone = false
  ) {}
}
