import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//steps to take:
//fully componentize the app
//make it so app.js is the template file
//<Header /> => just html
//<Main /> => the 'routes' exist in here
//<Footer /> => just html
//then make index.js render App.js instead of TangerineNotes component




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
