import { Observable } from 'rx';

function source() {
  return Observable.of(0);
}

function sink() {

}

export default source;

export { sink };
