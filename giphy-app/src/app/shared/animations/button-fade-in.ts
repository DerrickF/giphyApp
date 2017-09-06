// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const buttonFadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('buttonFadeInAnimation', [
        //if the state is show set opacity to 1 (or visible)
        state('pause', style({
            opacity: 1
        })),
        //if the state is hide set opacity to 0 (or not visible)
        state('play', style({
            opacity: 0
        })),
        //set up animations between transitions so it does not just pop on and off
        //but rather, fade in and out.
        transition('play => pause', animate('500ms ease-out')),
        transition('pause => play', animate('500ms ease-out'))
    ])