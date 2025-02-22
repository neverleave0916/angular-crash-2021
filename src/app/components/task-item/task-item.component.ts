import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  //輸出到父層
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();

  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
    // console.log('delete');
  }
  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }


}
