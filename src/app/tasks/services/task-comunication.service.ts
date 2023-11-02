import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TaskComunicationService {
    constructor() {}

    private taskAddedSource = new Subject<void>();

    taskAdded = this.taskAddedSource.asObservable();

    announceTaskAdded() {
        this.taskAddedSource.next();
    }
}
