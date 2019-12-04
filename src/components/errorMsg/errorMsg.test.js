import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorMsg } from './errorMsg';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorMsg error={'Test Error'} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
