import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask= new EventEmitter<Task>();
  text!: string;
  day!: string;
  reminder!: boolean;

  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService){
    this.subscription = uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }

  onSubmit(){
    if(!this.text){
      alert('Please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    this.onAddTask.emit(newTask)

    this.text = '';
    this.day = '';
    this.reminder = false;

  }


}
