/* codigo
        {
            notes: [],
            active: null,
            active: {
                id: '',
                title: '',
                body: '',
                imageUrl: '',
                date: 54968718176
            }
        }
*/


const initialState = {
    notes: [],
    active: null
};


export const notesReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        default: return state;

    }

}