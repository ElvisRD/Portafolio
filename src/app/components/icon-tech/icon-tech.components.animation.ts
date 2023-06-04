import { trigger, state, style, transition, animate } from '@angular/animations';

export const ocultarIcon = trigger('ocultarIcon', [
  state('start', style({
      opacity: 1
  })),
  state('end', style({
      opacity: 0
  })),
  transition('start => end', animate(500)),
  transition('end => start', animate(500))
])
