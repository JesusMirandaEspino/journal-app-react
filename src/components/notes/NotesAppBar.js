import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNotes } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch( );
    const { active } = useSelector(  state => state.notes );

    const handleSave = () => {
        dispatch( startSaveNotes( active  ) );
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const  handleFileChange = (e) => {
        console.log(  e.target );
    }


    return (
        <div  className="notes__appbar">
            <span>28 de Agosto del 2021</span>

            <input id="fileSelector" name="file" type="file"  style={{ display: 'none' }} onChange={ handleFileChange } />

            <div> 
            
                <button className="btn"  onClick={ handlePictureClick } >Picture</button>

                <button className="btn" onClick={ handleSave }  >Save</button>

            </div>

        </div>
    )
}
