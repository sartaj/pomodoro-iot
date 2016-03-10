var exeq = require('exeq');

module.exports.render = function setLights(lights) {

  switch(lights) {
    case undefined:
      break;
    case false:
      exeq('hue lights off');
      break;
    case true:
      exeq("echo '" + JSON.stringify({"hue": 350, "bri": 255 }) + "' | hue lights state" );
      break;
    default:
      exeq("echo '" +  JSON.stringify({"hue": lights.h, "bri": lights.b }) + "' | hue lights state" );
      break;
  }

}
