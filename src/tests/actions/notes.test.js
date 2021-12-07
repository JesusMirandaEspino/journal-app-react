
/*jslint es6 */
import { startNewNote, startLoadNotes, startSaveNotes } from '../../actions/notes'; //ES6 modules
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';


import { db } from '../../firebase/firebaseConfig';
import { disableNetwork } from "firebase/firestore";
import { types } from '../../types/types';
import { doc, deleteDoc } from "@firebase/firestore";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'TESTING'
    }
};


let store = mockStore(initState);

describe('Pruebas con las acciontes con notes', () => {

    beforeEach( () => {
        store = mockStore(initState);
    } );

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


    test( 'startLoadNotes Debe de cargar las notas', async() => {
        await store.dispatch( startLoadNotes('TESTING') );

        const actions = getActions();

        expect( actions ).toEqual({
            type: types.notesLoad,
            payload: expect.any( Array )
        });


        const expeted = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        }

        expect( actions[0].payload[0] ).toMatchObject( expeted );

    });


    test( 'startSaveNotes Debe de guardar la nota', async() => {
        const note = {
            id: '9drCcumDOfPZwcURhICN',
            title: 'titulo',
            body: 'body'
            }

            await store.dispatch(  startSaveNotes(note) );

            const actions = store.getActions();

            exxpect( actions  ).toBe( types.notesUpdate );

            const docRef = await db.doc(`/TESTING/journal/notes/${node.id}`  ).get();

            expect( docRef.data().title ).toBe( note.title );


    });

});