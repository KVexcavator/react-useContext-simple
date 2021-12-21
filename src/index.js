import React from 'react';
import ReactDOM from 'react-dom';
import ColorProvider from './color-hooks';
import App from './App';

ReactDOM.render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById('root')
);
