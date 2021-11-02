import React from 'react';
import { Sidebar } from './Sidebar';
import { NothingSeleted } from './NothingSeleted';

export const JournalScreen = () => {
    return (
        <div className="journal__main-content" >


            <Sidebar />

            <main>

                <NothingSeleted />

            </main>


        </div>
    )
}
