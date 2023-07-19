import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
   studentForm: FormGroup;

  

  constructor(
    private _fb: FormBuilder,
    private _studentService: StudentService,
    private _dialogRef: MatDialogRef<AddStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // private _coreService: CoreService
    
  ) {
    this.studentForm = this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      salary:'',
      department:''
    })
  } 

  onFormSubmit(){
    if(this.studentForm.valid){
       this._studentService.addStudent(this.studentForm.value).subscribe({
        next: (val:any) =>{
          alert("student Added");
          this._dialogRef.close(true);
        },
        error: (err:any) =>{
         console.error(err);
        }
       })
    }
  }
}
