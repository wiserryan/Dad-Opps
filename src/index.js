import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App/App';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';


// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_PARKS', fetchAllParks);
}

function* fetchAllParks() {
  // GET all parks from the DB
  try {
      const parks = yield axios.get('/api/park');
      console.log('get all:', parks.data);
      yield put({ type: 'SET_PARKS', payload: parks.data });

  } catch {
      console.log('get all error');
  }
      
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//PARKS REDUCER
// Used to store movies returned from the server
const parks = (state = [], action) => {
  switch (action.type) {
      case 'SET_PARKS':
          return action.payload;
      default:
          return state;
  }
}
//selectedPark = movieToDisplay;
const selectedPark = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PARK_DETAILS':
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
      parks,
      selectedPark,

  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
