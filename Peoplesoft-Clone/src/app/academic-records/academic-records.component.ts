import { Component, OnInit } from '@angular/core';
import { ButtonDefinition } from './types/types.interface';
import { faFileText, faFile, faPhone, faBarsProgress, faArrowRotateForward,  faFileCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { SideNav } from '../types/sideNav.interface';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-academic-records',
  templateUrl: './academic-records.component.html',
  styleUrls: ['./academic-records.component.css']
})
export class AcademicRecordsComponent implements OnInit{

  
  constructor() { }

  ngOnInit(): void {
  }
  
  midNav: string = "Select a Value";
  navList: SideNav[] = [
    {
      title: 'View Grades',
      icon: faFileText,
      path: 'view-grades'
    },
    {
      title: 'View Academic Records',
      icon: faFile,
      path: 'view-academic-records'
    },
    {
      title: 'Communication List',
      icon: faPhone,
      path: 'communication-list'
    },
    {
      title: 'Progress Report',
      icon: faBarsProgress,
      path: 'progress-report'
    },
    {
      title: 'Change of Curriculum',
      icon: faArrowRotateForward,
      path: 'change-of-ccurriculum'
    },
    {
      title: 'Proof of Registration',
      icon: faFileCircleCheck,
      path: 'proof-of-registration'
    },
    {
      title: 'Request End of Year Results',
      icon: faFile,
      path: 'request-year-results'
    },
    {
      title: 'Mid Term Course Grade Average',
      icon: faFileText,
      path: 'mid-term'
    }
  ];

}
