import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  {
    path: 'ecom',
    loadChildren: () => import('./ecom/ecom.module').then((m) => m.EcomModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
