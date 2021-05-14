import { Component, Inject, NgZone, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-todo-dialog',
  template: `  
  <mat-dialog-content class="mat-typography form-area">
    <h2 mat-dialog-title>Add new item</h2>
    <mat-form-field>
      <input placeholder="title" matInput [(ngModel)]="data.title" />
    </mat-form-field>

    <mat-form-field>
      <textarea         
        matInput [(ngModel)]="data.description"
        placeholder="Task description"
        cdkTextareaAutosize
        #autosize="cdkTextareaAutosize"
        cdkAutosizeMinRows="1"
        cdkAutosizeMaxRows="5"
      ></textarea>
    </mat-form-field>
  </mat-dialog-content>

  <mat-dialog-actions align="end">
    <button mat-button (click)="onNoClick()">Cancel</button>
    <button mat-button [mat-dialog-close]="data" cdkFocusInitial>Create</button>
  </mat-dialog-actions>
  `,
  styles: [
    'mat-form-field { width: 100%; }'
  ]
})
export class TodoDialogComponent {
  labelOptions = ['purple', 'blue', 'green', 'yellow', 'red', 'gray'];

  constructor(
    public dialogRef: MatDialogRef<TodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _ngZone: NgZone
  ) { }

  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  // Closes dialog when empty space clicked.
  onNoClick(): void {
    this.dialogRef.close();
  }

}
