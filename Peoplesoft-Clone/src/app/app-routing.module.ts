import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageClassesComponent } from './manage-classes/manage-classes.component';
import { AcademicRecordsComponent } from './academic-records/academic-records.component';
import { ViewAcademicRecordComponent } from './academic-records/view-academic-record/view-academic-record.component';
import { ViewGradesComponent } from './academic-records/view-grades/view-grades.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manage-classes', component: ManageClassesComponent },
  { path: 'academic-records', component: AcademicRecordsComponent },
  { path: 'academic-records/:path', component: AcademicRecordsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
