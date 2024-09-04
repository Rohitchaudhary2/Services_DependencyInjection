import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private taskService = inject(TasksService)

  onAddTask(title: string, description: string) {
    const task = {
      title,
      description
    }
    this.taskService.addTask(task)
    this.formEl()?.nativeElement.reset();
  }
}
