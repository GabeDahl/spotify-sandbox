import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
    state('void', style({opacity: 0})),
    transition(':enter, :leave', [
        animate('1s 1s ease-in-out')
    ])
  ])

export const slideRight = trigger('slideRight', [
    state('void', style({transform: 'translate(-100vw)'})),
    transition(':enter, :leave', [
        animate('1s ease-in-out')
    ])
])
export const slideLeft = trigger('slideLeft', [
    state('void', style({transform: 'translate(100vw)'})),
    transition(':enter, :leave', [
        animate('1s ease-in-out')
    ])
])
