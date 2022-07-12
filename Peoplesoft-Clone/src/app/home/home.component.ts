import { Component } from '@angular/core';
import {
  faWallet,
  faBuildingColumns,
  faCalendarDays,
  faUserGraduate,
  faClipboard,
  faPeopleGroup,
  faListCheck,
  faArrowsSpin,
  faCoins,
  faHouse,
  faCompass,
  faUser,
  faFileLines,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}
  faWallet = faWallet;
  faBuildingColumns = faBuildingColumns;
  faHouse = faHouse;
  faEllipsesVertical = faEllipsisVertical;
  faCompass = faCompass;
  

  faArr:  any[]= [faWallet,
    faUser,
    faUser,
    faFileLines,
    faUserGraduate,
    faCalendarDays,
    faClipboard,
    faCalendarDays,
    faCoins,
    faBuildingColumns,
    faBuildingColumns,
    faPeopleGroup,
    faListCheck,
    faArrowsSpin,
    faEllipsisVertical,
    faFileLines,
  ];

  tileItems: string[] = [
    'Allowances',
    'Profile',
    'Application Summary',
    'Admissions',
    'Academic Records',
    'Meeting Attendance',
    'MoU/PPA',
    'Manage Classes',
    'Student Finance',
    'Undergraduate Funding',
    'Postgrad & Postddoc Funding',
    'Join & Societies',
    'Tasks',
    'Service Requests',
    'Important Links',
    'Offers',
  ];
}
