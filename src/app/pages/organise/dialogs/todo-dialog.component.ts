import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-todo-dialog',
  template: `
  <h1 mat-dialog-title>to do</h1>
  <div mat-dialog-content>
    <p>To do title:</p>
    <mat-form-field>
      <input placeholder="title" matInput [(ngModel)]="data.title" />
    </mat-form-field>

    <mat-form-field>
      <textarea
        placeholder="Task description"
        matInput [(ngModel)]="data.description"
      ></textarea>
    </mat-form-field>

  </div>

    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="data">
        Create
      </button>
    </div>

  `,
  styles: []
})
export class TodoDialogComponent{
  labelOptions = ['purple', 'blue', 'green', 'yellow', 'red', 'gray'];

  constructor(
    public dialogRef: MatDialogRef<TodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  // Closes dialog when empty space clicked.
  onNoClick(): void {
    this.dialogRef.close();
  }

}
