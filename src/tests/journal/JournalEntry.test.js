import React from 'react';
import { JournalEntry } from '../../components/journal/JournalEntry';

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import  configureStore  from 'redux-mock-store';
import {configure,  mount } from 'enzyme';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import '@testing-library/jest-dom';


const middleware = [thunk];
const mockstore = configureStore( middleware );

configure({ adapter: new Adapter() });

const initialState = {};

let store = mockstore( initialState );
store.dispatch = jest.fn();

const nota = {
    id: 10,
    date: 0,
    title: 'hola',
    body: 'Universo',
    url: 'https://algunlugar.com/foto.jpg'
};



        const wrapper = mount(

        <Provider store={ store } >
                <JournalEntry  { ...nota } />
        </Provider>

        );




describe( 'Pruebas con <JournalEntry />', () => {

    test( 'Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });


    test( 'Debe de activar la nota', () => {

        wrapper.find( '.journal__entry' ).prop( 'onClick' )();

        expect( store.dispatch ).toHaveBeenCalled();

    });


});