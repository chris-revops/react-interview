import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import App from './App';

let component;

beforeEach(() => {
  component = mount(<Root><App /></Root>);
});

afterEach(() => {
  component.unmount();
});

it('renders the header', () => {
  expect(component).toMatchSnapshot()
});
