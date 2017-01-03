/* eslint-env browser */

import { Observable } from 'rx';

import React from 'react';
import ReactDOM from 'react-dom';

// import AppView from '../app/index.js';
import Main from '../app/js/main.js';

function render($container) {
  Observable.fromEvent(document, 'DOMContentLoaded')
    .subscribe(() => {
      // ReactDOM.render(
      //   React.createElement(AppView),
      //   document.querySelector($container)
      // );
      Main();
    });

    // if ('serviceWorker' in navigator) {
    //   navigator.serviceWorker
    //     .register('../app/sw.js')
    //     .then(() => {console.log('Service Worker registered.')})
    // }

}

export default render;
export { render };
