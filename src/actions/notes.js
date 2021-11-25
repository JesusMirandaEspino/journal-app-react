import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { types } from '../types/types';
import { loadNotes } from '../helpers/loadNote';


export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await addDoc(collection(db, `${ uid }`, "journal/notes"), newNote );

        dispatch(  activeNote( doc.id, newNote ) );

    };
}

export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});


export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});

export const startLoadNotes = ( uid ) => {
    return async ( dispatch ) => {
            const notes = await loadNotes(  uid );
            dispatch(  setNotes(notes) );
    }
}

export const startSaveNotes = ( note ) => {

    return async( dispatch, getState ) => {
        const { uid } = getState().auth;

        if ( !note.url ) {
            delete note.url
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id

        const noteRef = doc(db, `${uid}/journal/notes/${note.id}`)
        await updateDoc(noteRef,noteToFirestore);

        dispatch( refreshNote( note.id, noteToFirestore ) );

    }
}


export const refreshNote = ( id, note ) => ({
    type: types.notesUpdate,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});

