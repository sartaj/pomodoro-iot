import Tock from 'tocktimer';
import Cycle from 'cycle-react';
import React from 'react';

const TimerView = Cycle.component('Hello', (interactions, props) => {
  // const name = props.get('name');

  const onTick = interactions.get('OnTick');
  const onComplete = interactions.get('TimerComplete');
  const onPauseClicked = interactions.get('PauseClicked');
  const myName = props.get('name');

  const timer = new Tock({
    countdown: true,
    interval: 1000,
    callback: interactions.listener('OnTick'),
    complete: interactions.listener('TimerComplete'),
  });

  timer.start(500400);

  return props.get()
    .map(clock =>
      <div>
        {clock}
        <div className="clock">{clock.name}</div>
        <div className="clock" >{prop.timeLeft}</div>
        <button>Play</button>
        <button onClick={interactions.listener('PauseClicked')}>Pause</button>
        <button>Reset</button>
        <button>Toggle</button>
      </div>
    )
});

export default TimerView
