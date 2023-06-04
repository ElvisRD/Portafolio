import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private sanitizer: DomSanitizer) {}

  cyborg: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/imgs/home/cyborg.png');
  Luz: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/imgs/home/Luz.png');

}
