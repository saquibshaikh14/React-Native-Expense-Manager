// src/sagas/index.js
import { all } from 'redux-saga/effects';

function* rootSaga() {
  // If there are no sagas in this project, the root saga can remain empty
  yield all([]);
}

export default rootSaga;

// import { all } from 'redux-saga/effects';
// import * as remindersSagas from './reminders'; // Import reminder sagas
// import * as authSagas from './auth'; // Import authentication sagas
// // Import other feature sagas

// // Combine all sagas into the root saga
// function* rootSaga() {
//   yield all([
//     ...Object.values(remindersSagas).map((saga) => saga()),
//     ...Object.values(authSagas).map((saga) => saga()),
//     // Include other feature sagas in a similar way
//   ]);
// }

// export default rootSaga;

