import React from 'react';
import { useSelector } from 'react-redux';
import { Sidebar } from './Sidebar';
import { NothingSeleted } from './NothingSeleted';
import { NoteScreen } from '../notes/NoteScreen';

export const JournalScreen = () => {

    const { active } = useSelector( state => state.notes );

    return (
        <div className="journal__main-content" >


            <Sidebar />

            <main>

                {
                    ( active )
                    ? ( <NoteScreen /> )
                    : (  <NothingSeleted /> )
                }


                

            </main>


        </div>
    )
}
