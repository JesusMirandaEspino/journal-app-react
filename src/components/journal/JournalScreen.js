import React from 'react';
import { Sidebar } from './Sidebar';
// en proceso import { NothingSeleted } from './NothingSeleted';
import { NoteScreen } from '../notes/NoteScreen';

export const JournalScreen = () => {
    return (
        <div className="journal__main-content" >


            <Sidebar />

            <main>

                {/* <NothingSeleted /> */}

                <NoteScreen />

            </main>


        </div>
    )
}
