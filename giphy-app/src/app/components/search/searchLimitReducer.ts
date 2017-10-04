import { Action } from '../../shared/action';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const SET = 'SET'

export function searchLimitReducer(state: number = 0, action: Action) {
    console.log('state updated', action.type, action.payload ? action.payload : 0);
    switch (action.type) {
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        case RESET:
            return 0;

        case SET:
            return state = action.payload.value;

        default:
            return state;
    }
}