import { Component } from '@angular/core';

// selector 是指定app-root為這個元件的 HTML 標籤名稱
// templateUrl是這個元件的 HTML 應該要使用哪個檔案，如果要直接寫在 ts 檔案裡，則改成template即可；
// 同理使用styleUrls可以置入外連的 CSS 檔案，使用styles則可以直接撰寫 CSS。
// providers－跟 NgModule 的 providers 類似。但要注意的是，在 NgModule 的 providers 裡宣告的 Service （或是直接在 Service 的 provideIn 宣告為 'root'），整個應用程式的生命週期只會有一個實體 （類似 singleton 的概念） ；但在此處宣告的 Service，實體數量是跟該 Component 的實體數量一致的。
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//components的屬性、方法(自訂方法或生命週期方法)
export class AppComponent {
  


  //  /**
  //  * 綁定畫面中的「名稱」欄位
  //  *
  //  * @memberof AppComponent
  //  */
  //   name = '';

  //   /**
  //    * 綁定畫面中的「內容」欄位
  //    *
  //    * @memberof AppComponent
  //    */
  //   content = '';
}
