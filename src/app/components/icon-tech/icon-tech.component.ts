import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ocultarIcon } from './icon-tech.components.animation';

@Component({
  selector: 'app-icon-tech',
  templateUrl: './icon-tech.component.html',
  styleUrls: ['./icon-tech.component.css'],
  animations: [ocultarIcon]
})
export class IconTechComponent {
  constructor(private sanitizer: DomSanitizer) {}
  
  @Input() urlSvg: string = '';
  @Input() nameTech: string = '';
  @Input() url: string = '';
  @Input() ml: string = '';
  svgIcon: SafeResourceUrl = '';
  animation_Icon: string = 'start'
  animation_textoIcon: string = 'end'

  ocultarIcon(){
    this.animation_Icon = 'end'
    this.animation_textoIcon = 'start'
  }

  mostrarIcon(){
    this.animation_Icon = 'start'
    this.animation_textoIcon = 'end'
  }

  ngOnInit() {
    this.svgIcon = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/'+this.urlSvg);
  }

 

}
