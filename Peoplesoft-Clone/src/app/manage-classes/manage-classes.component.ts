import { Component, OnInit } from '@angular/core';
import {
  faCalendarDays,
  faCartShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { NavListsService } from '../nav-lists.service';
import { SideNav } from '../types/sideNav.interface';

@Component({
  selector: 'app-manage-classes',
  templateUrl: './manage-classes.component.html',
  styleUrls: ['./manage-classes.component.css'],
})
export class ManageClassesComponent implements OnInit{
  midNav: string = 'View My Classes';
  navList!: SideNav[];
  constructor(private navListService: NavListsService){}

  ngOnInit(){
    this.navList = this.navListService.navList;
  }
}
