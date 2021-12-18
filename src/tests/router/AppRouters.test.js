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
import { firebaseConfig, firebaseConfigTesting } from "../../firebase/firebaseConfig";


import { login  } from '../../actions/auth';

jest.mock( '../../actions/auth', () => ({
    login: jest.fn(),

}));

const middleware = [thunk];
const mockstore = configureStore( middleware );

configure({ adapter: new Adapter() });

const initialState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockstore( initialState );
store.dispatch = jest.fn();


describe( 'Pruebas con <AppRouters />', () => {

    test( 'Debe de mostrar el router si estoy autenticado', async() => {

        const useCard = await firebaseConfig.auth.signInWithEmailAndPassword('testing@testing.com', '123456');

        await act( async () => {
            const wrapper = mount(
                <Provider store={ store } >
                    <MemoryRouter>
                        <AppRouters />
                    </MemoryRouter>
                </Provider>

            );
        });



    });



});