import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword  } from 'firebase/auth';
import { googleAuthProvider} from '../firebase/firebaseConfig';
import { types } from '../types/types';





export const startLoginEmailpassword = ( email, password ) => {
    return (dispatch) => {

        const auth = getAuth();

            signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(
                    login( user.uid, user.displayName )
                );
            })
            .catch((error) => {
                console.log(error);
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
            .catch((err)=> console.error(err));
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
