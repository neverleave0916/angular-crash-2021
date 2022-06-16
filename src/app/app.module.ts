import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {path:"", component:TasksComponent},
  {path:"about", component:AboutComponent}
]
// declarations－屬於此 NgModule 的 Component、Directive 與 Pipe 皆放置於此。
// imports－此 NgModule 需要使用、依賴的其他 NgModule 皆放置於此（好像有點饒舌）。
// providers－可以被整個應用程式中的任何部分被使用的 Service 皆放置於此，也可以將 Service 直接放置在 Component 的 Metadata 裡的 providers （但放置在不同地方會有一些需要特別注意的事項，後續在說明 Service 時會提到。另外，在 Angular 6 之後，在 Service 之中也可以使用 Metadata 裡的 providedIn 宣告，該 Service 要 provided 到哪裡。詳細可以參考此篇文章或是隔壁棚Angular 大師之路也有提到） 。
// exports－此處放置的是，當在其他 NgModule 裡 import 了當前的 Module 後，可以在其他 NgModule 裡的 Component Template 使用的 Component、Directive 與 Pipe。
// entryComponents－放在這裡的元件通常是用不通過 Route 的方式，而採用動態加入的元件。
// bootstrap－在此設置的是應用程式通常稱之為 Root Component （根元件） ，而且只有 Root Module 才要設置此屬性。
@NgModule({
  // for components
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  // for modules
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
