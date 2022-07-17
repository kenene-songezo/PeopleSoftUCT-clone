import { Component, Input } from '@angular/core';
import { SideNav } from '../types/sideNav.interface';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent{
  @Input() midNav!: string;
  @Input() navList!: SideNav[];
  @Input() hasHeader: boolean = false;
}
