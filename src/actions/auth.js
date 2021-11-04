import { types } from '../types/types';


export const startLoginEmailpassword = () => {
    return (dispatch) => {
        setTimeout( dispatch( login( 12345, 'Jesus' ) ), 3500 );
    }
}

export const login = ( uid, displaName ) => (    {
        type: types.login,
        payload: {
            uid,
            displaName
    }
});
