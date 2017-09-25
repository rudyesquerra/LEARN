import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mood from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Mood />, document.getElementById('root'));
registerServiceWorker();
