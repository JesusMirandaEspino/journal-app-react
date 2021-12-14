import {  RegisterScreen } from '../../components/auth/RegisterScreen';
import React from 'react';
import {  mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import  configureStore  from 'redux-mock-store';
import  thunk  from 'redux-thunk';

const middleware = [thunk];
const mockstore = configureStore( middleware );

const initialState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};


let store = mockstore( initialState );

const wrapper = mount(

    <Provider store={ store } >
        <MemoryRouter>
            <RegisterScreen />
        </MemoryRouter>
    </Provider>

    );

describe( 'Pruebas con <RegisterScreen />', () => {

    test( 'Debe de mostrarse correctamente', () => {


        expect(wrapper).toMatchSnapshot();


    });


});