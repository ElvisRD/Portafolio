import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(public sanitizer: DomSanitizer) {}
  menu: boolean = false;
  play: boolean = false;

  svgIcon: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/nav/cat.svg');
  svgPlay: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/nav/play.svg');
  svgPause: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/nav/pause.svg');
  music: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/music/music.mp3');

  playMusic(){
    this.play = !this.play;
  }

  mostrarMenu() {
    this.menu = !this.menu;
  }
}
