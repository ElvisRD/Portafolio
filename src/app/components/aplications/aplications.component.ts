import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-aplications',
  templateUrl: './aplications.component.html',
  styleUrls: ['./aplications.component.css']
})
export class AplicationsComponent {
  constructor(private sanitizer: DomSanitizer) {}

  imgComingSoon: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/comingsoon.jpg');
}
