import * as SideNavActions from './sidenav.actions';
import { SideNav } from './sidenav.model';

export type Action = SideNavActions.All;

// Default SideNavState
const defaultState: SideNav = {
    searchLimit: 5,
    autoPlay: false,
}

// Helper function to create a new state object
const newState = (state, newData) => {
    console.log('setting new state:', state, newData);
    return Object.assign({}, state, newData)
}

// Reducer
export function sideNavReducer(state: SideNav = defaultState, action: Action) {
    switch (action.type) {

        case SideNavActions.TOGGLE:
            return newState(state, { autoPlay: action.payload });

        case SideNavActions.SET_VALUE:
            return newState(state, { searchLimit: action.payload });

        case SideNavActions.INCREMENT:
            return newState(state, { searchLimit: state.searchLimit + 1 });

        case SideNavActions.DECREMENT:
            return newState(state, { searchLimit: state.searchLimit - 1 });

        case SideNavActions.RESET:
            return newState(state, { searchLimit: 0 });

        default:
            return state;
    }
}