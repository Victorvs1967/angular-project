import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../layout/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, 
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'auth', loadChildren: () => import('../modules/auth/auth.module').then(m => m.AuthModule) },
      { path: 'home', loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule) },
      { path: 'about', loadChildren: () => import('../modules/about/about.module').then(m => m.AboutModule) },
      { path: 'contacts', loadChildren: () => import('../modules/contacts/contacts.module').then(m => m.ContactsModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
