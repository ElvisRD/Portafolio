import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { FooterComponent } from './sections/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconTechComponent } from './components/icon-tech/icon-tech.component';
import { IconLinkComponent } from './components/icon-link/icon-link.component';
import { AplicationsComponent } from './sections/aplications/aplications.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    CardProjectComponent,
    FooterComponent,
    IconTechComponent,
    IconLinkComponent,
    AplicationsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPageScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
