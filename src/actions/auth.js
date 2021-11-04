import { types } from '../types/types';

export const login = ( uid, displaName ) => (    {
        type: types.login,
        payload: {
            uid,
            displaName
    }
});
