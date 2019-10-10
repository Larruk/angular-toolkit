import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';
import { TodoComponent } from './page/todo/todo.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'todo', component: TodoComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
