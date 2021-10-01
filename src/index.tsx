import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';
import './styles.pcss';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element');
}

ReactDOM.render(<App />, rootElement);
