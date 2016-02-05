var Immutable = require('immutable');

var emptyList = new Immutable.List();

function runtimeErrors(stateIn, action) {
  var state = stateIn;
  if (state === undefined) {
    state = emptyList;
  }

  switch (action.type) {
    case 'RUNTIME_ERROR_ADDED':
      return state.push(Immutable.fromJS(action.payload.error));

    case 'RUNTIME_ERRORS_CLEARED':
      return emptyList;

    default:
      return state;
  }
}

module.exports = runtimeErrors;
