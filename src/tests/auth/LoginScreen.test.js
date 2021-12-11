import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import  configureStore  from 'redux-mock-store';
import React from 'react';
import { LoginScreen } from '../../components/auth/LoginScreen';
import {configure,  mount } from 'enzyme';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

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

describe( 'Pruebas con loginScreen', () => {

    beforeEach( () => {
        store = mockstore( initialState );
    });


    test( 'Pruebas en <LoginScreen />', () => {

        const wrapper = mount(

        <Provider store={ store } >
            <MemoryRouter>
                <LoginScreen />
            </MemoryRouter>
        </Provider>

        );
        expect( wrapper ).toMatchSnapshot();

    });



});