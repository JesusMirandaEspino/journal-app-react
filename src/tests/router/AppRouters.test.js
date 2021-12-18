import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import  configureStore  from 'redux-mock-store';
import React from 'react';

import {configure,  mount } from 'enzyme';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { AppRouters } from '../../routers/AppRouters';
import { act } from '@testing-library/react';
import { firebaseConfig, firebaseConfigTesting, db } from "../../firebase/firebaseConfig";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const user = {uid: 123456, displayName: "Jesus", email: 'correo@gmail.com'};
const authMock = {
    firebase: {
        auth: () => ({
            signOut: jest.fn(),
            signInWithEmailAndPassword: jest.fn( () => Promise.resolve({user})  ),
            onAuthStateChanged: jest.fn( (callback) => callback(user))
        })
    }
};

jest.mock('../../firebase/firebase-config', () => (authMock));

import { login  } from '../../actions/auth';

jest.mock( '../../actions/auth', () => ({
    login: jest.fn(),

}));

const authF = getAuth();

const middleware = [thunk];
const mockstore = configureStore( middleware );

configure({ adapter: new Adapter() });

const initialState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: '1234656',
        },
        notes: []
    }
};

let store = mockstore( initialState );
store.dispatch = jest.fn();


describe( 'Pruebas con <AppRouters />', () => {

    test( 'Debe de mostrar el router si estoy autenticado', async() => {

        let user;

        const useCard = await authMock();
        user = useCard;

        await act( async () => {
            const wrapper = mount(
                <Provider store={ store } >
                    <MemoryRouter>
                        <AppRouters />
                    </MemoryRouter>
                </Provider>

            );
        });

        expect( login ).toHaveBeenCalled(  );


    });



});