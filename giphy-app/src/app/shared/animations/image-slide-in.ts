// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style, query, stagger } from '@angular/animations';

export const imageSlideIn =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('imageSlideIn', [

        // route 'enter' transition
        transition('* => *', [

            // css styles at start of transition
            query('md-card', style({ transform: 'translateX(-400%' })),
            query('md-card',
                stagger('100ms', [
                    animate('100ms', style({ transform: 'translateX(0)' }))
                ])),

            // animation and styles at end of transition
            animate('.3s', style({ opacity: 1 }))
        ]),
    ]);