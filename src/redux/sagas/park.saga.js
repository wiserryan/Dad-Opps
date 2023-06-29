import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
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

  function* removePark(action) {
    console.log('HERE!!');
    try {
      yield axios.delete(`/api/park/${action.payload}`);
      yield put({ type: 'FETCH_PARKS' });
    } catch (error) {
      alert('Something went wrong');
      console.log(`ERROR in removePlant ${error}`);
      throw error;
    }
  }

function* parkSaga() {
    yield takeLatest('FETCH_PARKS', fetchParks);
    yield takeLatest('REMOVE_PARK', removePark);
}

export default parkSaga;