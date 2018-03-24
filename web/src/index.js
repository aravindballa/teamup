import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import dotenv from 'dotenv';

// dotenv.config({ path: '../.env' });
// const result = dotenv.config()

// if (result.error) {
//   console.error(result.error);
// }
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
