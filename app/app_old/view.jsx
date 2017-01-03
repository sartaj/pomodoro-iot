import React from 'react';

import TimerView from './components/TimerView';

export default (interactions, props$) => props$.map(() =>
  <div>
    <TimerView />
  </div>
);
