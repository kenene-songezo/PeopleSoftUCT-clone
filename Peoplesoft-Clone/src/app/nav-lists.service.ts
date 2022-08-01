import { Injectable } from '@angular/core';
import { faCalendarDays, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SideNav } from './types/sideNav.interface';

@Injectable({
  providedIn: 'root'
})
export class NavListsService {
  navList: SideNav[] = [
    {
      title: 'View My Classes',
      icon: faCalendarDays,
      path: 'view-my-classes',
    },
    {
      title: 'Shopping cart',
      icon: faCartShopping,
      path: 'shopping-cart',
    },
    {
      title: 'Search Class and Enroll',
      icon: faMagnifyingGlass,
      path: 'search-class-and-enroll',
    },
  ];

  getNavList(){
    return this.navList;
  }

}
