import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageClassesComponent } from './manage-classes/manage-classes.component';
import { AcademicRecordsComponent } from './academic-records/academic-records.component';
import { ViewAcademicRecordComponent } from './academic-records/view-academic-record/view-academic-record.component';
import { ViewGradesComponent } from './academic-records/view-grades/view-grades.component';
import { NavListsService } from './nav-lists.service';
import { SideNav } from './types/sideNav.interface';
import { ShoppingCartComponent } from './manage-classes/shopping-cart/shopping-cart.component';
import { SearchClassAndEnrollComponent } from './manage-classes/search-class-and-enroll/search-class-and-enroll.component';
import { ViewMyClassesComponent } from './manage-classes/view-my-classes/view-my-classes.component';
import { CommunicationListComponent } from './academic-records/communication-list/communication-list.component';
import { ChangeOfCcurriculumComponent } from './academic-records/change-of-ccurriculum/change-of-ccurriculum.component';
import { MidTermComponent } from './academic-records/mid-term/mid-term.component';
import { ProgressReportComponent } from './academic-records/progress-report/progress-report.component';
import { ProofOfRegistrationComponent } from './academic-records/proof-of-registration/proof-of-registration.component';
import { RequestYearResultsComponent } from './academic-records/request-year-results/request-year-results.component';

let paths: { path: string; component: any }[] = [];
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'manage-classes',
    component: ManageClassesComponent,
    children: [
      { path: 'view-my-classes', component: ViewMyClassesComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      {
        path: 'search-class-and-enroll',
        component: SearchClassAndEnrollComponent,
      },
    ],
  },
  {
    path: 'academic-records',
    component: AcademicRecordsComponent,
    children: [
      {
        path: 'view-grades',
        component: ViewGradesComponent,
      },
      {
        path: 'view-academic-record', component: ViewAcademicRecordComponent,
      },
      {
        path: 'communication-list', component: CommunicationListComponent,
      },
      {
        path: 'progress-report', component: ProgressReportComponent,
      },
      {
        path: 'change-of-ccurriculum', component: ChangeOfCcurriculumComponent,
      },
      {
        path: 'proof-of-registration', component: ProofOfRegistrationComponent,
      },
      {
        path: 'request-year-results', component: RequestYearResultsComponent,
      },
      {
        path: 'mid-term', component: MidTermComponent,
      }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
