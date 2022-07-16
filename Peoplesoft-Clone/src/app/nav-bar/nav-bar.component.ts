import { Component, Input } from '@angular/core';
import { faHouse, faEllipsisVertical, faCompass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  @Input() midNav!: string;
  @Input() isHome?: boolean = false;

  faHouse = faHouse;
  faEllipsesVertical = faEllipsisVertical;
  faCompass = faCompass;

}
