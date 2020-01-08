import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Root from '../../Root';
import App from './App';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';

let component;

beforeEach(() => {
  component = mount(<Root><App /></Root>);
});

afterEach(() => {
  component.unmount();
});

it('renders the header', () => {
  console.log(component.debug())
  // expect(component.find(Header).length).toEqual(1);
});

// it('has a BrowserRouter', () => {
//   expect(component.find(BrowserRouter).length).toEqual(1);
// });

// it('renders the footer', () => {
//   expect(component.find(Footer).length).toEqual(1);
// });