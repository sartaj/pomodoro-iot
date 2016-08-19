/* eslint-env browser */

import { Observable } from 'rx';

import React from 'react';
import ReactDOM from 'react-dom';

import AppView from '../app/index.js';

function render($container) {
  Observable.fromEvent(document, 'DOMContentLoaded')
    .subscribe(() => {
      ReactDOM.render(
        React.createElement(AppView),
        document.querySelector($container)
      );
    });
}

export default render;
export { render };
