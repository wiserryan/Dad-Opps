import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App/App';
import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';


const startingParkArray = [
  // { id: 1, title: 'Boyd Park', path: 'images/Boyd_park.png', description: 'Awesome play area with lots of space, picnic tables, and feels safe.' },
  { id: 2, title: 'Edgcumbe Rec', path: 'images/Edgcumbe_rec.png', description: 'Huge playground play with softball field near by, benches, and rec center nearby.' },
  { id: 3, title: 'Groveland Park', path: 'images/Groveland.png', description: 'Two separate playgrounds in front of school, benches, fairly busy.' },
  { id: 4, title: 'Mattocks Park', path: 'images/Mattocks_park2.png', description: 'One of our favorite play areas with lots of people, picnic tables,feels safe with field nearby.' }


];


const parkList = (state = startingParkArray, action) => {
  switch (action.type) {
    //add one park to existing array
    case 'ADD_PARK':
      return [ ...state, action.payload ]
   //replace all existing parks
      case 'SET_PARKS':
        return action.payload;
      default:
        return state;
  }
};


function* fetchParks() {
  // GET all parks from the DB
  try {
      const response = yield axios.get('/api/park');
      const action = { type: 'SET_PARKS', payload: response.data };
      yield put(action);
  } catch (error) {
      console.log(`ERROR in fetchParks: ${error}`);
  }
      
}

// Create the rootSaga generator function
function* rootSaga() {
  yield takeLatest('FETCH_PARKS', fetchParks);
  yield takeLatest('REMOVE_PARK', removePark);
}


function* removePark(action) {
  try {
    yield axios.delete(`/api/park/${action.payload}`);
    yield put({ type: 'FETCH_PARKS' });
  } catch (error) {
    alert('Something went wrong');
    console.log(`ERROR in removePlant ${error}`);
    throw error;
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
    parkList,  
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
