import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  isDarkTheme:boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private overlayContainer: OverlayContainer
    ) {}

  ngOnInit(): void {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true:false;
    console.log(this.isDarkTheme);
  }

  storeThemeSelection() {
    localStorage.setItem('theme', this.isDarkTheme?"Dark":"Light");
  }

}
