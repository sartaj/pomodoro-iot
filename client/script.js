$(function() {


  var availableMoods = {
      'chill': (60 * 5),
      'focus': (60 * 25)
  };

  var currentMood;

  var clock = $('.your-clock').FlipClock({
    countdown: true,
    clockFace: 'MinuteCounter',
    autostart: false
  });

  $("#reset").on('click', function() {
    clock.stop();
    clock.setTime(availableMoods[currentMood])
  });

  $("#stop").on('click', function() {
    clock.stop();
  });

  $("#start").on('click', function() {
    clock.start();
  });

  $("#toggle").on('click', function() {
    currentMood = (currentMood === 'focus') ? 'chill' : 'focus';
    console.log(currentMood);
    renderMood(currentMood);
  });

  Mousetrap.bind('t', function() {
    currentMood = (currentMood === 'focus') ? 'chill' : 'focus';
    renderMood(currentMood);
  });
  Mousetrap.bind('s', function() {
    clock.start();
  });
  Mousetrap.bind('p', function() {
    clock.stop();
  });
  Mousetrap.bind('r', function() {
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
      $.ajax({
          url: '/robin',
          type: 'POST',
          contentType:"application/json",
          dataType:"json",
          data: JSON.stringify({
            "action": "set-mood",
            "value": requestedMood
          }),
          success: function(a) {
            console.log(a);
          },
          error: function(a) {
            console.log(" ERRR", a)
          }
      });

    }, 1000);
  }

  var currentMood = 'focus';
  renderMood(currentMood);

})
