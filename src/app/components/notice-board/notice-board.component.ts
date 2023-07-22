import { Component, Inject, Input, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoticedialogComponent } from './noticedialog/noticedialog.component';
import { NoticeService } from 'src/app/services/notice.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.scss']
})
export class NoticeBoardComponent {
  constructor (   private dialog: MatDialog, @Inject(NoticeService) private _noticeService: NoticeService) {}
  notices : any[] = [];


  ngOnInit(){
     this.getAllTeachers();
  }
  getAllTeachers(){
  this._noticeService.getNotice().subscribe((data:[])=>{
     this.notices =
      data;
     console.log(this.notices);

   })
  } 
  getAllNotice(){
    this._noticeService.getNotice().subscribe((data:[])=>{
      this.notices =
       data;
      console.log(this.notices);
    })
  }

  openNoticeDialog(notice: any): void {
    this.dialog.open(NoticedialogComponent, {
      data: this.notices
    });
  }
   deleteNotice(id:number){
     this._noticeService.deleteNotice(id).subscribe({
      next:(res) =>{
         alert("delete Notice");
         this.getAllNotice()
      },
      error:(err) =>{

      }
     })
  }
}
