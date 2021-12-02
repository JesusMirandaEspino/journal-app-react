import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';


describe('Pruebas con authReducer', () => {


    test('Debe de realizar el login', () => {

        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: '123',
                displaName: 'Jesus'
            }
        }
        const state = authReducer( initState, action );

        expect( state ).toEqual( {
                uid: '123',
                name: 'Jesus'
        });
    });


    test('Debe de realizar el logout', () => {

        const initState = {
                uid: '123',
                name: 'Jesus'
            };

        const action = {
            type: types.logout
        }

        const state = authReducer( initState, action );

        expect( state ).toEqual( {} );
    });


    test('No debe de hacer cambios en el state', () => {

        const initState = {
                uid: '123',
                name: 'Jesus'
            };

        const action = {
            type: 'erwrw'
        }

        const state = authReducer( initState, action );

        expect( state ).toEqual( initState );
    });


});