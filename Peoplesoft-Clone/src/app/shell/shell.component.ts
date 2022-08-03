import { Component, Input, OnInit } from '@angular/core';
import { SideNav } from '../types/sideNav.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit{

  select: String = "";
  constructor(private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {

  }
  @Input() midNav!: string;
  @Input() navList!: SideNav[];
  @Input() hasHeader: boolean = false;

  setselected(navItem: SideNav){
    this.select = navItem.title;
  }

  goToSelected(navItem: SideNav){
    this.router.navigate([navItem.path], {relativeTo: this.route});
  }

}
