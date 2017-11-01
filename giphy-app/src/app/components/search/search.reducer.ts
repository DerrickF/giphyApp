import * as SearchActions from './search.actions';
import { Search } from './search.model';

export type Action = SearchActions.All;

// Default state
const defaultState: Search = {
    searchTerm: "",
    loading: false,
    searchResults: []
}

// Reducer
export function searchReducer(state: Search = defaultState, action: Action) {
    switch (action.type) {

        case SearchActions.SET_VALUE:
            return { ...state, searchTerm: action.payload }

        case SearchActions.GET_SEARCH_RESULTS:
            return { ...state, loading: true };

        case SearchActions.GET_SEARCH_RESULTS_SUCCESS:
            return { ...state, searchResults: action.payload, loading: false };

        case SearchActions.GET_SEARCH_RESULTS_FAIL:
            return { ...state, ...action.payload, loading: false };

        case SearchActions.TOGGLE_PLAY_ALL:
            console.log('flipping all actives:', );
            //loop through current results and set the active property
            let results = [];
            state.searchResults.forEach(function (item, index) {
                let result = state.searchResults[index];
                result.active = action.payload;
                results.push(result);
            });
            //push results into new state obj
            return { ...state, searchResults: results, loading: false };


        default:
            return state;
    }
}
