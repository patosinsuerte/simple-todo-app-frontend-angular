import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksInputsComponent } from './components/tasks-inputs/tasks-inputs.component';
import { TasksTableComponent } from './components/tasks-table/tasks-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [TasksInputsComponent, TasksTableComponent],
    imports: [CommonModule, FormsModule],
    exports: [TasksInputsComponent, TasksTableComponent],
})
export class TasksModule {}
