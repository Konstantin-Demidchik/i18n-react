import React from 'react';
import ReactDOM from 'react-dom';

import './i18n';

import App from './App';
import './assets/styles/index.scss';
//import "regenerator-runtime/runtime";

const root = document.createElement("div");

root.setAttribute("id", "app");
document.body.appendChild(root);

ReactDOM.render( <App />, root);