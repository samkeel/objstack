import { Component, Inject, NgZone, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-todo-dialog',
  template: `  
  <mat-dialog-content class="mat-typography form-area">
    <h2 mat-dialog-title>Add new item</h2>
    <mat-form-field>
      <input placeholder="title" matInput [(ngModel)]="data.title" />
    </mat-form-field>

    
      <angular-editor 
        [config]="editorConfig"
        [placeholder]="'Enter text here...'"
        [(ngModel)]="data.description"
      ></angular-editor>

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

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: false,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      }
    ],
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [
        'underline',
        'strikeThrough',
        'subscript',
        'superscript',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ],
    sanitize: true,
  };

}
