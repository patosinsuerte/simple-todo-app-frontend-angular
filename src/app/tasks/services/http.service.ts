import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseTask } from '../interfaces/task.interface';
import { Observable, catchError, of } from 'rxjs';
import { SavedTask } from '../interfaces/savedTask.interface';
import { SavedStatus } from '../interfaces/savedStatus';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(private httpClient: HttpClient) {}

    private apiLink: string = 'http://localhost:9191/api/v1/tasks';

    //* GET ALL
    public getAll(): Observable<ResponseTask[]> {
        const url = `${this.apiLink}/all`;
        return this.httpClient
            .get<ResponseTask[]>(url)
            .pipe(catchError((error) => of([])));
    }

    //*POST ALL
    public createNewTask(task: SavedTask): Observable<ResponseTask> {
        const url = `${this.apiLink}/create`;
        return this.httpClient.post<ResponseTask>(url, task);
    }

    //*PUT TASK
    public editTask(
        id: number | undefined,
        task: SavedTask
    ): Observable<ResponseTask> {
        const url = `${this.apiLink}/${id}`;
        return this.httpClient.put<ResponseTask>(url, task);
    }

    //* PUT STATS

    public editStatus(
        id: number | undefined,
        stats: SavedStatus
    ): Observable<ResponseTask> {
        const url = `${this.apiLink}/update-status/${id}`;
        return this.httpClient.put<ResponseTask>(url, stats);
    }

    //* DELETE
    deleteTask(id: number): Observable<void> {
        const url = `${this.apiLink}/${id}`;
        return this.httpClient.delete<void>(url);
    }
}
