import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from './../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string="";
  day: string="";
  reminder: boolean = false;
  showAddTask: boolean = false;

  subscription !: Subscription; //用來watch
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.showAddTask = value;
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    //檢查資料
    if(!this.text || !this.day){
      alert("請輸入完整資料");
      return;
    }
    //建立新的Task物件
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    //emit至上一層
    this.onAddTask.emit(newTask);
    //恢復預設值
    this.text="";
    this.day="";
    this.reminder=false;
  }
}
