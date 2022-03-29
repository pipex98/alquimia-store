import React from 'react';
import ReactDOM from 'react-dom';

import { AlquimiaStore } from './AlquimiaStore';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <AlquimiaStore />
  </BrowserRouter>,
  document.getElementById('root')
);