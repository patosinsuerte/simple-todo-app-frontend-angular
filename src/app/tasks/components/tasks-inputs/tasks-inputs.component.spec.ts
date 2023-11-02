import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksInputsComponent } from './tasks-inputs.component';

describe('TasksInputsComponent', () => {
  let component: TasksInputsComponent;
  let fixture: ComponentFixture<TasksInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksInputsComponent]
    });
    fixture = TestBed.createComponent(TasksInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
