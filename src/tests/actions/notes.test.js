
/*jslint es6 */
import { startNewNote } from '../../actions/notes'; //ES6 modules
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';


import { db } from '../../firebase/firebaseConfig';
import { disableNetwork } from "firebase/firestore"; 
import { types } from '../../types/types';
import { doc, deleteDoc } from "@firebase/firestore";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
    auth: {
        uid: 'TESTING'
    }
});

describe('Pruebas con las acciontes con notes', () => {

    afterAll(() => { disableNetwork(db); });

    test('debe de crear una nueva nota startNewNote', async() => {

        await store.dispatch( startNewNote() );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        expect( actions[1] ).toEqual({
            type: types.notesAddNote,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        const docId = actions[0].payload.id;
        const noteRef = doc(db, `/TESTING/journal/notes/${docId}`);
        await deleteDoc(noteRef);

    });

});