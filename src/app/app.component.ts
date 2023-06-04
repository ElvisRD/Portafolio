import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(){
    Aos.init();
    window.addEventListener('load', Aos.refresh);
  }
}
