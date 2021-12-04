
/*jslint es6 */
import { startNewNote } from '../../actions/notes'; //ES6 modules
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
    auth: {
        uid: 'TESTING'
    }
});

describe('Pruebas con las acciontes con notes', () => {

    test( 'Debe de crear una nueva nota con notes', async() => {

        await store.dispatch( startNewNote() );

    });

});