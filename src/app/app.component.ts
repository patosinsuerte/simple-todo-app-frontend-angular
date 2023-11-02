import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'angular-todo';

    isTableClicked: boolean = false;

    public handleEditClick(isClicked: boolean): void {
        this.isTableClicked = isClicked;
    }

    public testId: string = '';

    public handleEventId(id: string) {
        this.testId = id;
    }
}