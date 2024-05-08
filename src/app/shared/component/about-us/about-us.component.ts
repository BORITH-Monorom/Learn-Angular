import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/core/services/data.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
@UntilDestroy()
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, AfterViewInit  {
  constructor(
    private dataservice: DataService,
  ) { }

  ngOnDestroy(): void {}
  total_emp: number;
  total_vac: number;
  total_imp: number;
  total_vis: number;
  total_vie: number;

  ngOnInit(): void {
    this.extractData() // Fetch data during initialization
  }











totalCount:number;
loader :boolean  = true; // Initial state for the loader
// Initialize dataSource and bind to paginator
  dataSource = new MatTableDataSource<any>();
displayedColumns: string[]= ['id', 'title'];

@ViewChild(MatPaginator) paginator: MatPaginator;
// @ViewChild(MatPaginator) paginator!: MatPaginator;
ngAfterViewInit(): void {
  this.dataSource.paginator = this.paginator; // Assign paginator to data source after view initialization
}

  extractData(): void {
    this.dataservice.getPhotoData().subscribe({
      next: (res: any) => {
        this.dataSource.data = res;
        this.length = res.length;
        this.totalCount = res.length; // Set totalCount for skeleton loader
        this.loader = false; // Turn off the loader after data is fetched
      },
      error: (error: any) => {
        console.error('HTTP error: ', error);
        this.loader = false; // Turn off loader on error to avoid infinite loading
      }
    });
  }




//mat paginator
page = 10;
length=100;
pageSize = 10;
pageIndex = 0;
pageSizeOptions = [5, 10, 25];
showFirstLastButtons = true;
disabled = false;

handlePageEvent(event: PageEvent): void {
  if(event.pageIndex >0){
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize
  }else{
    this.page = 1 - event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
}

