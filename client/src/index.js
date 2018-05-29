import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeaderCom from './components/HeaderComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HeaderCom />, document.getElementsByClassName('super_container'));
registerServiceWorker();
