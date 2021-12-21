import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import colors from './color-data.json';
import App from './App';

export const ColorContext = createContext();

ReactDOM.render(
  <ColorContext.Provider value={colors}>
    <App />
  </ColorContext.Provider>,
  document.getElementById('root')
);
