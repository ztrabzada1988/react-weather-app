import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) { // state is array because it will several cities

    switch (action.type) {
        case FETCH_WEATHER: 
            // never mutate a state but return new instance of state
            return [ action.payload.data, ...state ]; // creates a new array and insert the new data at the top of the array
    }

    return state;
}