import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { NSpiredProvider } from './contexts/NSpiredContext';

import { faLightbulb, faStar as farStar,
  faCheckCircle,
faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import {
  faClipboardList,
  faStar as fasStar,
  faCheck,
  faTimes,
  faTasks,
  faHourglassHalf,
  faCommentSlash,
  faEdit
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faLightbulb, // header
  faClipboardList, // dashboard icon
  fasStar, // solid star for upvotes
  farStar, // star outline for upvotes
  faCheck,
  faTimes,
  faTasks,
  faCheckCircle,
  faHourglassHalf,
  faTimesCircle,
  faCommentSlash,
  faEdit
)

ReactDOM.render(
  <BrowserRouter>
  <NSpiredProvider>
    
    <App />
    
  </NSpiredProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
