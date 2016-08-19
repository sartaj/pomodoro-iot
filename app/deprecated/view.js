import Mousetrap from 'mousetrap';
import $ from 'jquery';
import Kefir from 'kefir';
import mediator from './mediator.js';

$(() => {
  const availableMoods = {
    chill: (60 * 5),
    focus: (60 * 25),
  };

  let currentMood = 'focus';

  const clock = $('.your-clock').FlipClock({
    countdown: true,
    clockFace: 'MinuteCounter',
    autostart: false,
  });

  $('#reset').on('click', () => {
    clock.stop();
    clock.setTime(availableMoods[currentMood])
  });

  $('#stop').on('click', () => {
    clock.stop();
  });

  $('#start').on('click', () => {
    clock.start();
  });

  $('#toggle').on('click', () => {
    currentMood = (currentMood === 'focus') ? 'chill' : 'focus';
    renderMood(currentMood);
  });

  Mousetrap.bind('t', () => {
    currentMood = (currentMood === 'focus') ? 'chill' : 'focus';
    renderMood(currentMood);
  });

  Mousetrap.bind('s', () => {
    clock.start();
  });
  Mousetrap.bind('p', () => {
    clock.stop();
  });
  Mousetrap.bind('r', () => {
    clock.stop();
    clock.setTime(availableMoods[currentMood])
  });

  setInterval(function() {
    var currentClock = clock.getTime();
    var time = currentClock.time;

    document.title = convertSecondsToTime(time) + ' | ' + currentMood.toUpperCase();

    if(time <= 0) {
      currentMood = (currentMood === 'focus') ? 'chill' : 'focus';
      renderMood(currentMood);
    }

  }, 1000);

  function convertSecondsToTime(time) {
    let hours = Math.floor(time / 3600);
    time -= hours * 3600;

    let minutes = Math.floor(time / 60);
    time -= minutes * 60;

    let seconds = parseInt(time % 60, 10);

    return (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
  }

  function renderMood(requestedMood) {
    clock.stop();
    clock.setTime(availableMoods[requestedMood]);
    $('.mood-label').html("Time to " + requestedMood + ".");

    setTimeout(function(){
      clock.start();
      $('body').attr('data-mood', requestedMood);

      $('.mood-label').html("Let's " + requestedMood + ".");

      mediator['user:mood-requested'] = Kefir.stream(emitter => {
        emitter.emit({
          action: 'set-mood',
          value: requestedMood,
        });
      });

    }, 1000);
  }
  renderMood('focus');
});
