var exeq = require('exeq');

module.exports.render = function (play) {

  switch(play) {
    case undefined:
      break;
    case false:
      exeq("osascript -e 'tell application \"spotify\" to pause'");
      break;
    default:
      exeq("osascript -e 'tell application \"spotify\" to play track \"" + play[Math.floor(Math.random() * play.length)] + "\"'");
      break;
  }

}
