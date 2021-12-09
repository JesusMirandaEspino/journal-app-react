import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { login, logout, startLogout } from '../../actions/auth';
import { types } from '../../types/types';


const middleware = [thunk];
const mockstore = configureStore( middleware );


const initialState = {};

let store = mockstore( initialState );

describe( 'Pruebas con auth', () => {

    beforeEach( () => {
        store = mockstore( initialState );
    });

    test('Login o logout deben de crear la accion respectiva', () => {
        const uid = '123ABC';
        const displaName = 'Jesus';

        const loginAction = login( uid, displaName );
        const logoutAction = logout();

        expect( loginAction ).toEqual({
        type: types.login,
                payload: {
                    uid,
                    displaName
                }
        });

        expect( logoutAction ).toEqual({
        type: types.logout,
        }
        );

    });


    test( 'Debe de realizar el startLogout', async() => {

        await store.dispatch( startLogout() );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.logout,
        });

        expect( actions[1] ).toEqual({
            type: types.notesLogoutCleaning
        });

    });

});