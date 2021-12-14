import {  RegisterScreen } from '../../components/auth/RegisterScreen';
import React from 'react';
import {  mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import  configureStore  from 'redux-mock-store';
import  thunk  from 'redux-thunk';
import { types } from '../../types/types';

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


    test( 'Debe hacer el dispatch de la accion respectiva', () => {

        const emailField = wrapper.find( 'input[name="email"]' );

        emailField.simulate( 'change',  {
            target: {
                value: '',
                name: 'email'
            }
        });


        wrapper.find( 'form' ).simulate('submit', {
            preventDefault(){}
        });

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.uiSetError,
            payload: 'Email is wrong'
        });


        // [ { type: '[UI] Set Error', payload: 'Email is wrong' } ]

    });


});