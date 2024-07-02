import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'task-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss',  '../../styles/common.scss']
})
export class TaskDialogComponent {

  message: string = ""
  confirmButtonText = ""
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<TaskDialogComponent>) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.confirm;
      }
    }
    this.dialogRef.updateSize('50vw');
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
