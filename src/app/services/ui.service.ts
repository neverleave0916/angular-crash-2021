import { Injectable } from '@angular/core';
// 用這樣在多個組件中傳遞
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask():void {
    this.showAddTask = !this.showAddTask;
    // 這樣可以傳遞目前的值
    this.subject.next(this.showAddTask);
  }
  //subscribe這個
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
