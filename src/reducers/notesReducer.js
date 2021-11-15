/* codigo
        {
            notes: [],
            active: null,
            active: {
                id: '',
                title: '',
                body: '',
                imageUrl: '',
                date: 54968718176
            }
        }
*/

import { types } from '../types/types';


const initialState = {
    notes: [],
    active: null
};


export const notesReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.notesActive:
        return {
            ...state,
            active: {
                ...action.payload
            }
        }

        default: return state;

    }

}