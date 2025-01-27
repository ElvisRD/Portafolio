import { Component } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(public sanitizer: DomSanitizer, private pageScrollService: PageScrollService) {}

  menu: boolean = false;
  svgIcon: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/nav/cat.svg');

  mostrarMenu() {
    this.menu = !this.menu;
  }

  cerrarMenu(target: string) {
    this.menu = false;
    this.pageScrollService.scroll({
      document: document,
      scrollTarget: target,
    });
  }
}
