import { setError, removeError, startLoading, finishLoading } from '../../actions/ui';
import {  types } from '../../types/types';

describe( 'Pruebas con ui-actions', () => {


    test( 'Todas las acciones deben de funcionar', () => {
        const actions = setError('Help!!!!');

        expect( actions ).toEqual({
            type: types.uiSetError,
            payload: 'Help!!!!'
        });

        const removeErrorActions = removeError();
        const startLoadingActions = startLoading();
        const finishLoadingActions = finishLoading();

        expect(removeErrorActions).toEqual({
            type: types.uiRemoveError
        });

        expect(startLoadingActions).toEqual({
            type: types.uiStartLoading
        });

        expect(finishLoadingActions).toEqual({
            type: types.uiFinishLoading
        });

    });

});