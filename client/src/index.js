import React from 'react';
import ReactDOM from 'react-dom';
import HeaderCom from './components/HeaderComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HeaderCom />, document.getElementById('super_container'));
registerServiceWorker();
