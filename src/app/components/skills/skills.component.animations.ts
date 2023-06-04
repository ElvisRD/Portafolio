import { trigger, state, style, transition, animate } from '@angular/animations';

export const animacionImg = trigger('animacionImg', [
  state('start', style({
    transform: 'translateX(-10%) translateY(6%)'
  })),
  state('end', style({
    transform: 'translateX(-6.2%) translateY(2.5%)'
  })),
  transition('start => end', animate('500ms ease-in')),
  transition('end => start', animate('500ms ease-in')),
]) 