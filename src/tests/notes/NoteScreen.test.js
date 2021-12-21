
import React from 'react';
import { Sidebar } from '../../components/journal/Sidebar';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import  configureStore  from 'redux-mock-store';
import {configure,  mount } from 'enzyme';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import '@testing-library/jest-dom';

import  { activeNote } from '../../actions/notes';
import { NoteScreen } from '../../components/notes/NoteScreen';


jest.mock( '../../actions/notes', () => ({
    activeNote: jest.fn(),
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
        active: {
            id: 123456,
            title: 'Mundo',
            body: 'Hola',
            date: 0
        },
        notes: []
    }
};

let store = mockstore( initialState );
store.dispatch = jest.fn();

        const wrapper = mount(

        <Provider store={ store } >
                <NoteScreen />
        </Provider>

        );

describe('Pruebas en <NoteScreen />', () => {

    test( 'Debe mostrarse Correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });


    test( 'Debe de disparar el activeNote', () => {

        wrapper.find('input[name="title"]').simulate( 'change', {
            target: {
                name: 'title',
                value: 'Hola de nuevo'
            }
        });

        expect( activeNote ).toHaveBeenCalled();

    });



});