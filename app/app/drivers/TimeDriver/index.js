import Tock from 'tocktimer';
import { Observable } from 'rx';

const timer = new Tock({
  countdown: true,
  interval: 1000,
  callback: () => {},
  complete: () => {},
});

function source() {
  return Observable.of(timer);
}

function sink(model$) {

  model$
    .map(model => model.currentComposition.isPlaying)
    .distinctUntilChanged()
    .flatMap(model$)
    .subscribe(model => {
      if (model.currentComposition.isPlaying) {
        timer.start();
      } else {
        timer.stop();
      }
    });
}

export default source;

export { sink };
