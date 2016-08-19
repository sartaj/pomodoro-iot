/*
 * Intent
 */

  import { Observable } from 'rx';

  function intent(sources) {
    const interactions = sources.interactions;
    const timer$ = sources.timer;
    const storage$ = sources.storage;

    return {
      UPDATE_STORAGE$: storage$.updated$,
      UPDATE_CLOCK$: timer$.updateClock$,
      UPDATE_TIMER_TIME$: timer$.updatedTimerTime$,
      PAUSE_TIMER$: Observable.merge([
        timer$.updatedTimerTime$,
        interactions.get('PauseTimer'),
      ]),
      RESET_TIMER$: Observable.merge([
        timer$.updatedTimerTime$,
        interactions.get('ResetTimer'),
      ]),
      GO_TO_NEXT_SECTION$: Observable.merge([
        interactions.get('GoToNextSection'),
      ]),
      GO_TO_PREVIOUS_SECTION$: Observable.merge([
        interactions.get('GoToPreviousSection'),
      ]),
      GO_TO_SPECIFIC_SECTION$: Observable.merge([
        interactions.get('GoToPreviousSection'),
      ]),
    };
  }

  export default intent;
