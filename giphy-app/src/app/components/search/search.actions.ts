import { Action } from "@ngrx/store"
import { Search } from "./search.model";

export const SET_VALUE = '[Search] Set';
export const GET_SEARCH_RESULTS = '[Search] GetSearchResults';
export const GET_SEARCH_RESULTS_SUCCESS = '[Search] GetSearchResults success';
export const GET_SEARCH_RESULTS_FAIL = '[Search] GetSearchResults fail';
export const TOGGLE_PLAY_ALL = '[Search] Toggle play all'

export class SetValue implements Action {
    readonly type = SET_VALUE;
    constructor(public payload: string) { }
}

export class GetSearchResults implements Action {
    readonly type = GET_SEARCH_RESULTS;
    constructor(public payload: string) { }
}

export class GetSearchResultsSuccess implements Action {
    readonly type = GET_SEARCH_RESULTS_SUCCESS;
    constructor(public payload: Search) { }
}

export class GetSearchResultsFail implements Action {
    readonly type = GET_SEARCH_RESULTS_FAIL;
    constructor(public payload?: any) { }
}

export class TogglePlayAll implements Action {
    readonly type = TOGGLE_PLAY_ALL;
    constructor(public payload: boolean) { }
}

export type All
    = SetValue
    | GetSearchResults
    | GetSearchResultsSuccess
    | GetSearchResultsFail
    | TogglePlayAll