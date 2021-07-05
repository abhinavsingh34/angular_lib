import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DatalibraryService } from './datalibrary.service';

@Component({
  selector: 'datalibrary',
  templateUrl: './datalibrary.component.html'
  ,
  styleUrls: ['./datalibrary.component.scss']

})
export class DatalibraryComponent implements OnInit {
  public data$;
  public data1$;
  public data2$;
  _link?:string;

  @Input()datasource:string;
  //headArray=["Name","Age","Address","Phone","Gender","Email"]
  @Input()datafields:string[];


  constructor(private servide: DatalibraryService) {
    // <th>Name</th>
    // <th>Age</th>
    // <th>Address</th>
    // <th>Phone</th>
    // <th>Gender</th>
    // <th>Email</th>

  //  this.servide.getRepos1().then((data)=>{
  //   this.data1$ = data
  // })
  // this.servide.getRepos2().then((data)=>{
  //   this.data2$ = data
  // })



  }

  ngOnInit(): void {

    console.log("See the App Componenet Data Source",this.datasource)
    console.log("see the data array from app component",this.datafields)

    this.servide.getRepos(this.datasource).subscribe((data)=>{
      this.data$ = data
    })
  }
  ngAfterViewInit(): void {



  }





}
