import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() })

describe('Supermax exercise test', () => {

  describe('Get Power', () => {
    it('Evaluate the first state', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.state('number')).toBe('');
      const instance = wrapper.instance();
      instance.getPower();
      expect(wrapper.state('hasPower')).toEqual(false);
    });
  });
});