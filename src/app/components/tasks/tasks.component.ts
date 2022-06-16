import { Component, OnInit } from '@angular/core';

// 引入資料與interface
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  //在建構子中，將TaskService的实例化对象储存在taskService属性中
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // 如果要改成Observable，不能這樣寫，因為我們會subscribe observerable，這樣才能持續監視它
    //this.tasks = this.taskService.getTasks();
    this.taskService.getTasks().subscribe((tasks) => { this.tasks = tasks }); //subscribe 可以想成promise的.then()
  }

  //呼叫我們定義好的http server
  deleteTask(task: Task) {
    //filter是為了更新畫面
    this.taskService
      .deleteTasks(task)
      .subscribe(() => { this.tasks = this.tasks.filter(t => t.id !== task.id) });
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    //呼叫我們的http 方法
    this.taskService.addTask(task).subscribe((newTask) => {this.tasks.push(newTask)});;

  }

}
