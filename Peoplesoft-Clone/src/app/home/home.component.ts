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
import { TileItems } from '../types/TileItems.inteface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  midNav: string = 'Student HomePage';
  tileItems: TileItems[] = [
    {
      heading: 'Allowances',
      icon: faWallet,
      routePath: '/allowances',
    },
    {
      heading: 'Profile',
      icon: faUser,
      routePath: '/profile',
    },
    {
        heading: 'Application Summary',
        icon: faUser,
        routePath: '/application-summary',
    },
    {
      heading:'Admissions',
      icon: faFileLines,
      routePath: '/admissions',
    },
    {
      heading: 'Academic Records',
        icon: faUserGraduate,
        routePath: '/academic-records',
    },
    {
      heading: 'Meeting Attendance',
      icon:faCalendarDays,
      routePath: '/meeting-attendance',
    },
    {
      heading: 'MoU/PPA',
      icon:faClipboard,
      routePath: '/mou-ppa',
    },
    {
      heading: 'Manage Classes',
      icon:faCalendarDays,
      routePath: '/manage-classes',
    },
    {
      heading: 'Student Finance',
      icon: faCoins,
      routePath: '/student-finance',
    },
    {
      heading: 'Undergraduate Funding',
      icon:faBuildingColumns,
      routePath: '/undergraduate-funding',
    },
    {
      heading: 'Postgrad & Postddoc Funding',
      icon:faBuildingColumns,
      routePath: '/postgrad-postdoc-funding',
    },
    {
      heading: 'Join & Societies',
      icon: faPeopleGroup,
      routePath: '/join-societies',
    },
    {
      heading: 'Tasks',
      icon: faListCheck,
      routePath: '/tasks',
    },
    {
      heading: 'Service Requests',
      icon: faArrowsSpin,
      routePath: '/service-requests',
    },
    {
      heading: 'Important Links',
      icon: faEllipsisVertical,
      routePath: '/important-links',
    },
    {
      heading: 'Offers',
      icon: faFileLines,
      routePath: '/offers',
    }
  ];
}
