import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { ToolkitShellComponent } from './components/toolkit-shell/toolkit-shell.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoComponent } from './page/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from './page/todo/todo-item/todo-item.component';
import { LoadingContainerComponent } from './components/loading-container/loading-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ToolkitShellComponent,
    HeaderComponent,
    FooterComponent,
    TodoComponent,
    TodoItemComponent,
    LoadingContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
