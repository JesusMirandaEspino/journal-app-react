
import { types } from '../../types/types';

describe( 'Pruebas con nuestros tipos', () => {

    test('Debe de tener estos tipos ', () => {

        expect( types ).toEqual({

                login: '[Auth] login',
                logout: '[Auth] logout',

                uiSetError: '[UI] Set Error',
                uiRemoveError: '[UI] Remove Error',

                uiStartLoading: '[UI] Start loading',
                uiFinishLoading: '[UI] Finish loading',

                notesAddNote: '[notes] New note',
                notesLoad: '[notes] Load notes',
                notesActive: '[notes] Set active notes',
                notesUpdate: '[notes] Updated notes',
                noteFileUrl: '[notes] Updated img url',
                notesDelete: '[notes] Delete note',
                notesLogoutCleaning: '[notes] Logout cleaning'
        });
    });
});