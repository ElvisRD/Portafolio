import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent {
  @Input() img: any;
  @Input() typed: string = '';
  @Input() titleApp: string = 'Coming soon';
  @Input() description: string = 'Coming soon';
  @Input() link: string = ''
  @Input() linkGithub: string = '';
  @Input() technologies: string = 'Coming soon';
  hola: string = 'hola';


  ngAfterViewInit() {
    this.hola = this.typed
  }

 
}
