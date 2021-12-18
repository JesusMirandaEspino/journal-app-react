import React from 'react';
import { Sidebar } from '../../components/journal/Sidebar';

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import  configureStore  from 'redux-mock-store';
import {configure,  mount } from 'enzyme';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import '@testing-library/jest-dom';
import { startLogout  } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';



jest.mock( '../../actions/auth', () => ({
    startLogout: jest.fn(),
}));

jest.mock( '../../actions/notes', () => ({
    startNewNote: jest.fn(),
}));


const middleware = [thunk];
const mockstore = configureStore( middleware );

configure({ adapter: new Adapter() });

const initialState = {
    auth: {
        uid: '1',
        name: 'Jesus'
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: null,
        notes: []
    }
};

let store = mockstore( initialState );
store.dispatch = jest.fn();

        const wrapper = mount(

        <Provider store={ store } >
                <Sidebar />
        </Provider>

        );

describe('Pruebas con <sidebar />', () => {

    test( 'Debe de mostrarse correctamente', () => {


        expect( wrapper ).toMatchSnapshot();

    });


    test( 'Debe de hacer el startLogout', () => {

        wrapper.find( 'button' ).prop( 'onClick' )();

        expect( startLogout ).toHaveBeenCalled();

    });


    test('Debe de llamar el startNewNote', () => {

        wrapper.find( '.journal__new-entry' ).prop( 'onClick' )();

        expect( startNewNote ).toHaveBeenCalled();
    });



});