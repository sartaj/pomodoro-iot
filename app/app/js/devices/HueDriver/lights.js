import exeq from 'exeq';

var Hue = require('hue.js');

console.log(Hue);

var client = Hue.createClient({
  stationIp:'192.168.2.3', // 'x.x.x.x', retrieved from the previous step
  appName:'APP_NAME' // Any alpha numeric name for your app
});

client.lights(function(err,lights) {

  if (err && err.type === 1) {
    // App has not been registered

    console.log("Please go and press the link button on your base station(s)");
    client.register({attempts: 10, interval: 3000}, function(err) {

      if (err) {
        // Could not register
        console.log("ERROR", JSON.stringify(err));
      } else {
        console.log("IT'S REGISTERED.")
        // Registered, carry on
      }
    });
  } else {
    console.log(lights);
  }
});

export default function render(lights) {
  switch (lights) {
    case undefined:
      break;
    case false:
      exeq('./node_modules/.bin/hue lights off');
      break;
    case true:
      exeq('echo "{hue: 350, bri: 255}" | ./node_modules/.bin/hue lights state');
      break;
    default:
      exeq(`echo '{hue: ${lights.h}, bri: ${lights.b} }' | ./node_modules/.bin/hue lights state`);
      break;
  }
}
