import { Component, OnInit } from '@angular/core';
import { ButtonDefinition } from './types/types.interface';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-academic-records',
  templateUrl: './academic-records.component.html',
  styleUrls: ['./academic-records.component.css']
})
export class AcademicRecordsComponent{

  constructor() { }

  //ngOnInit(): void {
  //}
  
  buttonArr: ButtonDefinition[]=[
    {
      icon: faWallet,
      name: "Wallet"
    },
    {
      icon: faWallet,
      name: "Wallet"
    },
    {
      icon: faWallet,
      name: "Wallet"
    },

  ]

}
