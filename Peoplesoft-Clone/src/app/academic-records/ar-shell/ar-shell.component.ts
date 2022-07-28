import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ar-shell',
  templateUrl: './ar-shell.component.html',
  styleUrls: ['./ar-shell.component.css']
})
export class ArShellComponent implements OnInit {
  academicRPath: any="";
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let path = params.get('path');
      this.academicRPath = path;
    });
  }
}
