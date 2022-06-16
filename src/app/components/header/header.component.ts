import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// 用來知道我們在哪個route，以隱藏按鈕
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task tracking system';
  showAddTask !: boolean;
  subscription !: Subscription; //用來watch

  constructor(private uiService:UiService, private router:Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.showAddTask = value;
    })
  }
  // lift cycle method 通常用這個
  ngOnInit(): void {
  }
  //按下顯示按鈕 我們用ui service來處理
  toggleAddTask() {
    this.uiService.toggleAddTask();
    console.log('toggle');
  }
  //現在的route與輸入的string是否相同
  hasRoute(route:string) {
    return this.router.url === route;
  }
}
