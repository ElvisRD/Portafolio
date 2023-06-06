import { Component } from '@angular/core';
import { animacionImg } from './skills.component.animations';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [animacionImg]
})

export class SkillsComponent {
  constructor(private sanitizer: DomSanitizer) {}
  animation_guardarImg: string = 'start';

  moverImg() {
    this.animation_guardarImg = 'end';
  }

  guardarImg(){
    this.animation_guardarImg = 'start';
  }

}

