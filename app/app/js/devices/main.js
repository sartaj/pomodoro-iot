import {Observable} from 'rx'
import moodMap from './moodMap.js';

const IoT = props$ => {
  return props$
    .map(prop => {
      // const config = Object.assign({}, defaultConfig, prop.actual)
      return prop.actual;
    })
    .filter(actual => actual !== 'inactive')
    .distinctUntilChanged()
    .map(scene => moodMap(scene));
};

export default IoT
