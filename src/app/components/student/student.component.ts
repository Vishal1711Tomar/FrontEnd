import { Component, OnInit , ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentService } from 'src/app/services/student.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName' , 'email','salary' , 'dob', 'department', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 
  constructor(private _dialog:MatDialog, private _studentService: StudentService){}
  
  ngOnInit(): void {
    this.getAllStudents();
    
  }
  
  addStudentForm(){
    const dialogRef = 
    this._dialog.open(AddStudentComponent);
    dialogRef.afterClosed().subscribe({next: (val) =>{
       if(val){ // if we are recieving a value then we are returning true 
          this.getAllStudents();
       }
    }})
  }

  getAllStudents(){
    this._studentService.getAllStudents().subscribe({
       next:(res :any) => {
          this.dataSource = new MatTableDataSource(res);
       },
       error: console.log,
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteStudent(id:number){
     this._studentService.deleteStudent(id).subscribe({
      next:(res) =>{
         alert("delete teacher");
         this.getAllStudents();
      },
      error:(err) =>{

      }
     })
  }

}
