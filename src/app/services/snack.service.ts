import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snackBar: MatSnackBar,
    private router: Router
  ) { }

  authError() {
    this.openSnackBar('You must be logged in!', 'Ok')
      .onAction()
      .subscribe(() => {
        this.router.navigate(['/login'])
      });

    // setTimeout(() => {
    //   this.router.navigate(['/login']);
    // }, 7000); //if user doesnt change route via navbar link. reroute page after 7seconds
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000
    });
  }

}
