import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NoticeService } from 'src/app/services/notice.service';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.scss']
})
export class AddNoticeComponent {
  noticeForm: FormGroup;
  
  
  constructor(private _fb: FormBuilder,
    private _noticeService:NoticeService){ 
     this.noticeForm = this._fb.group({
      title:'',
      content:'',
     })

  }
  onSubmit() {
    // Here, you can implement the logic to add the notice to your school management system.
    // For example, you can send an HTTP POST request to your backend API with the notice data. 
    if(this.noticeForm.valid){
      // console.log(this.noticeForm.value);
      this._noticeService.addNotice(this.noticeForm.value).subscribe({
       next: (val:any) =>{
         // why is only reset field working and not this.noticeForm.title = '' ;
         this.noticeForm.reset();
        // this.noticeContent = '';
       },
       error: (err:any) =>{
        console.error(err);
       }
      })
    
    
    }
    
    
  }
}
