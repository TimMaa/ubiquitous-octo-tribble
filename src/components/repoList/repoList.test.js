import React from 'react';
import ReactDOM from 'react-dom';
import { RepoList } from './repoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RepoList repos={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
