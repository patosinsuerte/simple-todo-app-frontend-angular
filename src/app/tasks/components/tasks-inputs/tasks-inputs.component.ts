import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { TaskComunicationService } from '../../services/task-comunication.service';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'tasks-tasks-inputs',
    templateUrl: './tasks-inputs.component.html',
    styleUrls: ['./tasks-inputs.component.css'],
})
export class TasksInputsComponent {
    constructor(
        private taskComunicationService: TaskComunicationService,
        private http: HttpService
    ) {}

    @ViewChild('txtAddInput')
    public input!: ElementRef<HTMLInputElement>;

    public editInputValue: string = '';
    @Output()
    onEmitLastValue = new EventEmitter<boolean>();

    @Input()
    isClicked = false;

    public lastEditOnClick(): void {
        this.isClicked = false;
        this.onEmitLastValue.emit(this.isClicked);
    }

    //*HIDE EDIT BUTTON WHEN INPUT > 0
    public hideEditButton(): void {
        if (this.editInputValue.length != 0 && this.editInputValue != '') {
            this.lastEditOnClick();
        }
    }

    editTaskAndHideButton() {
        this.updateTask();
        this.editInputValue = '';
        this.hideEditButton();
    }

    //* PETICIONES

    addTask() {
        const newValue = this.input.nativeElement.value;

        const newTask = {
            task: newValue,
        };

        this.http.createNewTask(newTask).subscribe((task) => {
            this.taskComunicationService.announceTaskAdded();
            this.input.nativeElement.value = '';
        });
    }

    updateTask() {
        this.http
            .editTask(parseInt(this.testId, 10), { task: this.editInputValue })
            .subscribe(() => {
                this.taskComunicationService.announceTaskAdded();
            });
    }

    @Input()
    public testId: string = '';

    public testClick() {
        console.log(this.testId);
    }
}
