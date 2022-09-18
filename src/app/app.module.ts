import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { Test1Component } from './test1/test1.component'
import { Test2Component } from './test2/test2.component'
import { Test3Component } from './test3/test3.component'
import { Test4Component } from './user/components/test4/test4.component'
import { Test5Component } from './user/components/test5/test5.component'
import { Test7Component } from './test7/test7.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component,
    Test5Component,
    Test7Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
