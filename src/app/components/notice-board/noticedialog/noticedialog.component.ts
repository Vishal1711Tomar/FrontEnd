import { createInjectableType } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-noticedialog',
  templateUrl: './noticedialog.component.html',
  styleUrls: ['./noticedialog.component.scss']
})
export class NoticedialogComponent {
  public dialogRef!: MatDialogRef<NoticedialogComponent>
  @Inject(MAT_DIALOG_DATA) public data: any

closeDialog(): void {
  this.dialogRef.close();
}
 // we need to pass data from the notice board into the dialog so that the we are showing only the basic description in the card and full information in the dialog.
}

