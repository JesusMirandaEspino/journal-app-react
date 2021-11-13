import Swal from 'sweetalert2';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { googleAuthProvider} from '../firebase/firebaseConfig';
import { types } from '../types/types';
import { startLoading, finishLoading } from '../actions/ui';




export const startLoginEmailpassword = ( email, password ) => {
    return (dispatch) => {

        dispatch( startLoading() );

        const auth = getAuth();

            signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {

                dispatch( login( user.uid, user.displayName ) );

                dispatch( finishLoading() );
            })
            .catch((error) => {
                console.log(error);
                dispatch( finishLoading() );
                Swal.fire( 'Error', error.message, 'error'  );
            });

       // detenido setTimeout( dispatch( login( 12345, 'Jesus' ) ), 3500 );

    }
}


export const startRegisterWithEmailPasswordName = ( email, password, name ) => {

    return ( dispatch ) => {
        const auth = getAuth();
        console.log( auth );
        createUserWithEmailAndPassword(auth,email,password )
            .then( async  ({user}) => {
                await updateProfile(user,{displayName:name})
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch((error)=> {
                console.error(error);
                Swal.fire( 'Error', error.message, 'error'  );
            });

    }
}



export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then( ({user}) =>{
                
                dispatch(login(user.uid, user.displayName))
            });
    }
}

export const login = ( uid, displaName ) => (    {
        type: types.login,
        payload: {
            uid,
            displaName
    }
});


export const logout = () => ({
    type: types.logout
});

export const startLogout = () => {
    return async ( dispatch ) => {
        const auth = getAuth();
        await auth.signOut();

        dispatch( logout() );

    }
};