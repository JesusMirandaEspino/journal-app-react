import { login, logout } from '../../actions/auth';
import { types } from '../../types/types';

describe( 'Pruebas con auth', () => {

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


});