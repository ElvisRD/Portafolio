import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.css']
})
export class IconLinkComponent {
  constructor(public sanitizer: DomSanitizer) {}
  
  @Input() urlSvg: string = '';
  @Input() alt: string = '';
  @Input() href: string = '';
  svgIcon: SafeResourceUrl = '';

  ngOnInit() {
    this.svgIcon = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/contact'+this.urlSvg);
  }

}
