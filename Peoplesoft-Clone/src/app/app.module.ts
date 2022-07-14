import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ManageClassesComponent } from './manage-classes/manage-classes.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManageClassesComponent,
    NavBarComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
