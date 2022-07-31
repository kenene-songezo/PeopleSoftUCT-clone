import { Component } from '@angular/core';
import {
  faCalendarDays,
  faCartShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { SideNav } from '../types/sideNav.interface';

@Component({
  selector: 'app-manage-classes',
  templateUrl: './manage-classes.component.html',
  styleUrls: ['./manage-classes.component.css'],
})
export class ManageClassesComponent {
  midNav: string = 'View My Classes';
  navList: SideNav[] = [
    {
      title: 'View My Classes',
      icon: faCalendarDays,
    },
    {
      title: 'Shopping cart',
      icon: faCartShopping,
    },
    {
      title: 'Search Class and Enroll',
      icon: faMagnifyingGlass,
    },
  ];
}
