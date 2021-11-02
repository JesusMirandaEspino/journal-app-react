import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="note__main-content" >

            <NotesAppBar />

            <div className="notes__content" >
                <label for="title">Title</label>
                <input  types="text" className="notes__title-input" placeholder="Some Awasome Title" />
                <textarea  className="note__textarea" placeholder="What happened today" ></textarea>

                <div className="notes__image" >
                    <img  src=""  alt="img" />
                </div>

            </div>

        </div>
    )
}
