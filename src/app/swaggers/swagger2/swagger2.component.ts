import { Component, OnInit, ViewChild } from '@angular/core';
import { Prority } from '../_model/swaggerModel';
import { environment } from 'src/environments/environment.prod';
import { Api2Service } from './api2.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-swagger2',
  templateUrl: './swagger2.component.html',
  styleUrls: ['./swagger2.component.css']
})
export class Swagger2Component implements OnInit {
  prorities: Prority[]; 
  public dataSource;
  public pagesize=environment.pagesize;
  displayedColumns: string[] = ['serviceCode', 'serviceName', 'status', 'templateId'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private api2service:Api2Service) {  }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.api2service.getdata().subscribe(res=>{
      this.prorities=res['prorities'];
      console.log("Data ==>", this.prorities);

      this.dataSource=new MatTableDataSource(this.prorities);
      this.dataSource.paginator = this.paginator;
        });

    (error) =>{
      console.log("Error-->", error);
    }
  }

}
