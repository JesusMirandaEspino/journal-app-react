import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import  configureStore  from 'redux-mock-store';
import React from 'react';
import { LoginScreen } from '../../components/auth/LoginScreen';
import {configure,  mount } from 'enzyme';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { startGoogleLogin } from '../../actions/auth';


jest.mock( '../../actions/auth', () => ({
    startGoogleLogin: jest.fn()
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

        const wrapper = mount(

        <Provider store={ store } >
            <MemoryRouter>
                <LoginScreen />
            </MemoryRouter>
        </Provider>

        );


describe( 'Pruebas con loginScreen', () => {

    beforeEach( () => {
        store = mockstore( initialState );
    });


    test( 'Pruebas en <LoginScreen />', () => {


        expect( wrapper ).toMatchSnapshot();

    });


    test('Debe de disparar la autentificacion con google', () => {
        wrapper.find( '.google-btn' ).prop('onClick')();

        expect( startGoogleLogin ).toHaveBeenCalled();

    });



});