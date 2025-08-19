import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css','./about-me.animations.css']
})
export class AboutMeComponent {
  constructor(private sanitizer: DomSanitizer) {}
  foto: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/foto.jpg');


  downloadArchive() {
    const link = document.createElement('a');
    link.href = 'assets/docs/CV_Elvis_Rodriguez.pdf';
    link.download = 'CV_Elvis_Rodriguez.pdf';
    link.click();
  }
}
