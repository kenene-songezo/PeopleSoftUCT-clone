import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AcademicRecordsComponent } from './academic-records/academic-records.component';
import { ManageClassesComponent } from './manage-classes/manage-classes.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShellComponent } from './shell/shell.component';
import { ViewGradesComponent } from './academic-records/view-grades/view-grades.component';
import { ViewAcademicRecordComponent } from './academic-records/view-academic-record/view-academic-record.component';
import { ArShellComponent } from './academic-records/ar-shell/ar-shell.component';
import { CommunicationListComponent } from './academic-records/communication-list/communication-list.component';
import { ProgressReportComponent } from './academic-records/progress-report/progress-report.component';
import { ChangeOfCcurriculumComponent } from './academic-records/change-of-ccurriculum/change-of-ccurriculum.component';
import { ProofOfRegistrationComponent } from './academic-records/proof-of-registration/proof-of-registration.component';
import { RequestYearResultsComponent } from './academic-records/request-year-results/request-year-results.component';
import { MidTermComponent } from './academic-records/mid-term/mid-term.component';
import { ViewMyClassesComponent } from './manage-classes/view-my-classes/view-my-classes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcademicRecordsComponent,
    ManageClassesComponent,
    NavBarComponent,
    ShellComponent,
    ViewGradesComponent,
    ViewAcademicRecordComponent,
    ArShellComponent,
    CommunicationListComponent,
    ProgressReportComponent,
    ChangeOfCcurriculumComponent,
    ProofOfRegistrationComponent,
    RequestYearResultsComponent,
    MidTermComponent,
    ViewMyClassesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  exports: [ShellComponent, ViewMyClassesComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
