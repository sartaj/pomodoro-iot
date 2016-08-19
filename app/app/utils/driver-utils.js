/**
 * Designed for cycle-react to create simple view(model(intent(sources))) cycles.
 * Cycle-react has an 'interactions' parameter and doesn't support drivers like traditional
 * cycle.js.
 */

  /**
   * @method runDriverSources
   * @param  {Object}        drivers Object with sources. Expecting 1 'interactions' key/val.
   * @param  {Observable}    props   Observable of props passed from component.
   * @return {Object}        returns object with key/val of all sources, + interactions.
   */
    function runDriverSources(drivers, props) {
      return Object.keys(drivers)
        .filter(driver => typeof drivers[driver].get !== 'function')
        .reduce((sources, driver) => {
          const s = sources;
          s[driver] = drivers[driver](props);
          return sources;
        }, { interactions: drivers.interactions });
    }

  /**
   * @method runDriverSources
   * @param  {Object}        drivers Expecting each driver to have a '.sink' method.
   * @param  {Observable}    model$  Model Observable streamt to run through driver sinks. .
   */
    function runDriverSinks(drivers, model$) {
      Object.keys(drivers).forEach(driver => {
        if (typeof drivers[driver].sink === 'function') {
          drivers[driver].sink(model$);
        }
      });
    }

export {
  runDriverSources,
  runDriverSinks,
};
