import {Observable} from 'rx'
import {intent} from './intent'
import {model} from './model'
import {view} from './view'
import Beep from '../components/Beep'
import IoT from '../devices/main.js'

const App = sources => {
  const actions = intent(sources);
  const state$ = model(actions, sources.Wad);
  const vtree$ = view(state$);
  const iot$ = IoT(state$);
  const beep$ = Beep(Observable.of({id: 'beep'}));
  return {
    DOM: vtree$,
    Wad: beep$,
    IoT: iot$
  }
}

export default App;
