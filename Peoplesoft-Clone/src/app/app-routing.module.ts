import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageClassesComponent } from './manage-classes/manage-classes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'manage-classes', component: ManageClassesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
