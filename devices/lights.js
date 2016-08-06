import exeq from 'exeq';

export default function render(lights) {
  switch (lights) {
    case undefined:
      break;
    case false:
      exeq('hue lights off');
      break;
    case true:
      exeq('echo "{hue: 350, bri: 255}" | hue lights state');
      break;
    default:
      exeq(`echo '{hue: ${lights.h}, bri: ${lights.b} }' | hue lights state`);
      break;
  }
}
