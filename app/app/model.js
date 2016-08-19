import { Observable } from 'rx';

// import availableMoods from './moodMap.json';

const INITIAL_MODEL = {
  clock: {
    name: "I'm so sick of that some old love",
    time: Date.now(),
    timer: {
      timeLeft: 0,
      currentComposition: '',
      currentSection: 0,
      countdown: true,
    },
  },
};

function model(intent) {
  const updatedModel$ = updateModel(intent);
  return updatedModel$;
}

export default model;


function updateModel(intent) {
  intent.UPDATE_CLOCK$;
  intent.UPDATE_TIMER$;
  return Observable.of(INITIAL_MODEL).distinctUntilChanged();
}
