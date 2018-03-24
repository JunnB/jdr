import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './layouts/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossOrigin="anonymous"
    />
    <App />
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
