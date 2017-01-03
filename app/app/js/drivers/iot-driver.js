import {Subject} from 'rx'
import HueDriver from '../devices/HueDriver/lights.js';
// SpotifyDriver
// TVDriver
export const makeIoTDriver = () => {
  const sound$ = new Subject()
  const get$ = id => sound$.filter(sound => sound.id == id)
  return soundConfig$ => {
    soundConfig$
      .subscribe(currentMood => {
        console.log(currentMood)
        HueDriver(currentMood.lights)
      });
    return { get$ };
  };
};
