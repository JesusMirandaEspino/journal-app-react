import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch( );

    const { active: note } = useSelector( state => state.notes );

    const  [ formValues, handleInputChange, reset ] =  useForm( note );

    const { title, body, id } = formValues;

    const activeId = useRef(  note.id );


    useEffect(() => {
        if( note.id !== activeId.current ){
            reset( note );
            activeId.current = note.id;
        }
    }, [ note, reset ]);


    useEffect(() => {
        dispatch( activeNote(  formValues.id, { ...formValues } ) );
    }, [formValues, dispatch]);


    const  handleDelete = () => {
        dispatch( startDeleting( id ) );
    };

    return (
        <div className="note__main-content" >

            <NotesAppBar />

            <div className="notes__content" >
                <label htmlFor="title">Title</label>
                <input  types="text" className="notes__title-input" name="title" placeholder="Some Awasome Title" value={ title } onChange={ handleInputChange } />
                <textarea  className="note__textarea" placeholder="What happened today"  name="body" value={ body } onChange={ handleInputChange } ></textarea>

                { (note.url) &&
                    <div className="notes__image" >
                    <img  src={ formValues.url }  alt="img" />
                </div>
                }

            </div>


        <button className="btn btn-danger"  onClick={  handleDelete } >Delete</button>

        </div>
    )
}
