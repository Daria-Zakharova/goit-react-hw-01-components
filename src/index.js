import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global} from '@emotion/react';
import { globalStyle } from 'json/globalStyleObj';
import './index.css';
import {App} from './components/App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={globalStyle}/>
      <App />
    {/* </Global> */}
  </React.StrictMode>
);
