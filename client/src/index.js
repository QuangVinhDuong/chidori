import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import WelComeComponent from './components/WelcomeComponent';
import MainComponent from './components/MainComponent';

if (localStorage.getItem('signin')) {
    ReactDOM.render(<MainComponent />, document.getElementById('super_container'));
} else {
    ReactDOM.render(<WelComeComponent />, document.getElementById('super_container'));
}

registerServiceWorker();
