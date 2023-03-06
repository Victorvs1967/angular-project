import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../users/pages/users/users.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: AboutComponent,
    children: [
      { path: 'users', component: UsersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }