import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './components/insert/insert.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path: 'insert', component:InsertComponent},
  {path: 'update', component:UpdateComponent},
  {path: 'delete', component:DeleteComponent},
  {path: 'list', component:ListComponent},
  {path: '**', pathMatch:'full', redirectTo:'insert'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
