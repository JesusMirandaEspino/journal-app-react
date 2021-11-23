import React from 'react';
import { useSelector } from 'react-redux';
import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';

export const NoteScreen = () => {

    const { active: note } = useSelector( state => state.notes );

    const  [ formValues, handleInputChange ] =  useForm( note );

    const { title, body } = formValues;

    return (
        <div className="note__main-content" >

            <NotesAppBar />

            <div className="notes__content" >
                <label htmlFor="title">Title</label>
                <input  types="text" className="notes__title-input" placeholder="Some Awasome Title" value={ title } onChange={ handleInputChange } />
                <textarea  className="note__textarea" placeholder="What happened today"  value={ body } onChange={ handleInputChange } ></textarea>

                { (note.url) &&
                    <div className="notes__image" >
                    <img  src=""  alt="img" />
                </div>
                }

            </div>

        </div>
    )
}
