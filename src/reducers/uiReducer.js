/*jslint es6 */

import { types } from '../types/types';

const initialState = {
    login: false,
    msgError: null
};


export const uiReducer = ( useState = initialState, action ) => {

    switch( action.type ){

        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            };

        case types.uiRemoveError:
            return{
                ...state,
                msgError: null
            };

        default:
            return state;

    }

}