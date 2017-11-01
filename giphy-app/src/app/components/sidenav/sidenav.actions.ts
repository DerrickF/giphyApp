import { Action } from "@ngrx/store"

export const SET_VALUE = '[SideNav] Set';
export const INCREMENT = '[SideNav] Increment';
export const DECREMENT = '[SideNav] Decrement';
export const RESET = '[SideNav] Reset';
export const TOGGLE = '[SideNav] Toggle';

export class SetValue implements Action {
    readonly type = SET_VALUE;
    constructor(public payload: number) { }
};

export class Increment implements Action {
    readonly type = INCREMENT;
};

export class Decrement implements Action {
    readonly type = DECREMENT;
}

export class Reset implements Action {
    readonly type = RESET;
}

export class ToggleAutoPlay implements Action {
    readonly type = TOGGLE;
    constructor(public payload: boolean) { }
}

export type All
    = SetValue
    | Increment
    | Decrement
    | Reset
    | ToggleAutoPlay

