import { Component } from '@angular/core';
import { TileItems } from './types/types.inteface';
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
  
  tileItems: TileItems[] = [
    {
      heading: 'Allowances',
      icon: faWallet, 
    },
    {
      heading: 'Profile',
      icon: faUser,
    },
    {
        heading: 'Application Summary',
        icon: faUser,
    },
    {
      heading:'Admissions',
      icon: faFileLines,
    },
    {
      heading: 'Academic Records',
        icon: faUserGraduate, 
    },
    {
      heading: 'Meeting Attendance',
      icon:faCalendarDays,
    },
    {
      heading: 'MoU/PPA',
      icon:faClipboard,
    },
    {
      heading: 'Manage Classes',
      icon:faCalendarDays,
    },
    {
      heading: 'Student Finance',
      icon: faCoins,
    },
    {
      heading: 'Undergraduate Funding',
      icon:faBuildingColumns
    },
    {
      heading: 'Postgrad & Postddoc Funding',
      icon:faBuildingColumns
    },
    {
      heading: 'Join & Societies',
      icon: faPeopleGroup,
    },
    {
      heading: 'Tasks',
      icon: faListCheck,
    },
    {
      heading: 'Service Requests',
      icon: faArrowsSpin,
    },
    {
      heading: 'Important Links',
      icon: faEllipsisVertical,
    },
    {
      heading: 'Offers',
      icon: faFileLines,
    }
  ];
}
