import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    iconSet = [
        'fas fa-adjust',
        'fas fa-brush',
        'fas fa-crop-alt',
        'fas fa-cut',
        'fas fa-edit'
    ]

    widgets = [
        new SampleWidget('Check Out the To Do List', 
            'This list is meant to be a simple tool for taking notes throughout the day as a dev.', 'fas fa-list-ul', 'Navigate', this.navigateToDo.bind(this)),
        new SampleWidget('Test Loading Widget', 'This is a test widget and there are more to come! Give the button a click for a sample loading animation.', this.getRandomIcon(), 'Load Widget', this.testLoading),
        new SampleWidget('Test 2', 'This is a test widget and there are more to come!', this.getRandomIcon(), 'Load Widget', this.testLoading),
        new SampleWidget('Test 3', 'This is a test widget and there are more to come!', this.getRandomIcon(), 'Load Widget', this.testLoading),
        new SampleWidget('Test 4', 'This is a test widget and there are more to come!', this.getRandomIcon(), 'Load Widget', this.testLoading)
    ];

    constructor(private router: Router) { }

    ngOnInit() { }

    testLoading(w: SampleWidget) {
        w.isLoading = true;
        setTimeout(() => {
            w.isLoading = false;
        }, 4000);
    }

    navigateToDo(w: SampleWidget) {
        this.router.navigate([w.route])
    }

    getRandomIcon() {
        return this.iconSet[Math.floor(Math.random()*this.iconSet.length)];
    }
}

export class SampleWidget {
    title: string;
    description: string;
    icon: string;
    buttonText: string;
    callback?: (SampleWidget) => {};
    isLoading = false;
    route = 'todo';

    constructor(title, description, icon, buttonText = 'Submit', callback?: (SampleWidget) => any) {
        this.title = title;
        this.description = description;
        this.icon = icon;
        this.buttonText = buttonText;
        this.callback = callback;
    }
}
