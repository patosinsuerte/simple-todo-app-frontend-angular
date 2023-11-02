import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ResponseTask } from '../../interfaces/task.interface';
import { TaskComunicationService } from '../../services/task-comunication.service';

@Component({
    selector: 'app-tasks-table',
    templateUrl: './tasks-table.component.html',
    styleUrls: ['./tasks-table.component.css'],
})
export class TasksTableComponent implements OnInit {
    constructor(
        public httpService: HttpService,
        private taskComincationService: TaskComunicationService
    ) {}

    tasks: ResponseTask[] = [];
    ngOnInit() {
        this.loadData();

        // Suscríbete al evento de tarea agregada
        this.taskComincationService.taskAdded.subscribe(() => {
            this.loadData();
        });
    }

    loadData() {
        this.httpService.getAll().subscribe((tasks) => {
            this.tasks = tasks;
        });
    }
    // El evento comienza desde aqui, se emite a la tabla -> Luego la tabla lo emite con input al hijo
    @Output()
    editClick = new EventEmitter<boolean>();

    isClicked: boolean = false;

    allTasks: ResponseTask[] = [];

    public editOnClick(): void {
        this.isClicked = true;
        this.editClick.emit(this.isClicked);
    }

    // SOBRE ID

    @Output()
    editTaskEventId = new EventEmitter<string>();

    editTaskEmitId(id: string) {
        this.editTaskEventId.emit(id);
    }

    // envio de id delete

    public deleteTask(id: number) {
        this.httpService.deleteTask(id).subscribe(() => {
            console.log(id);
            this.taskComincationService.announceTaskAdded();
        });
    }

    //status
    public updateStatus(id: number, status: string) {
        const newStatus = status === 'COMPLETE' ? 'INCOMPLETE' : 'COMPLETE';

        this.httpService.editStatus(id, { status: newStatus }).subscribe(() => {
            this.taskComincationService.announceTaskAdded();
        });
    }
}
