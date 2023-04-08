import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'user/user-table', pathMatch: 'prefix' },
  { path: 'user/user-table', component: UserTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
