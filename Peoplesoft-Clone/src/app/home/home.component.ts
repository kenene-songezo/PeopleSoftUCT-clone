import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  tileItems: string[] = [
    "Allowances",
    "Profile",
    "Application Summary",
    "Admissions",
    "Academic Records",
    "Meeting Attendance",
    "MoU/PPA",
    "Manage Classes",
    "Student Finance",
    "Undergraduate Funding",
    "Postgrad & Postddoc Funding",
    "Join & Societies",
    "Tasks",
    "Service Requests",
    "Important Links",
    "Offers",
  ];
}
